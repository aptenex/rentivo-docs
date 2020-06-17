const readingTime = require('reading-time');
const documentToPlainTextString = require('@contentful/rich-text-plain-text-renderer').documentToPlainTextString;
const path = require('path');
const _ = require('lodash');
const webpackLodashPlugin = require('lodash-webpack-plugin');
const crypto = require('crypto');

/**
 * Generate node edges
 *
 * @param {any} { node, boundActionCreators, getNode }
 */
exports.onCreateNode = async ({node, boundActionCreators, loadNodeContent, actions, getNode}) => {


  const {createNodeField} = boundActionCreators;
  const { internal } = node;
  const { owner, mediaType } = internal;
  if (mediaType === "text/richtext" && owner === "gatsby-source-contentful") {
    const doc = JSON.parse(await loadNodeContent(node));
    const text = documentToPlainTextString(doc);
    const result = readingTime(text);
    actions.createNodeField({ node, name: "readingTime", value: result });
  }

  /**
   * Add slug edge
   */
  let slug;
  if (node && node.internal && node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    if (!fileNode.relativePath) {
      return;
    }
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (
        Object.prototype.hasOwnProperty.call(node, 'frontmatter')
        && Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${node.frontmatter.slug}`;
    } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }
    if (
        Object.prototype.hasOwnProperty.call(node, 'frontmatter')
        && Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`;
    }
    createNodeField({node, name: 'slug', value: _.kebabCase(slug).toLowerCase()});

    /**
     * Add permalink edge
     *
     * If there is a path frontmatter - that overrides all.
     * Otherwise, we'll use the nested directory structure to build the permalink.
     */
    let permalink;
    if (
        Object.prototype.hasOwnProperty.call(node, 'frontmatter')
        && Object.prototype.hasOwnProperty.call(node.frontmatter, 'path')
    ) {
      permalink = `/${node.frontmatter.path}${slug}`;
    } else if (parsedFilePath.dir !== '') {
      permalink = `/${parsedFilePath.dir}${slug}`;
    } else {
      permalink = slug;
    }
    createNodeField({node, name: 'permalink', value: permalink.toLowerCase()});

    /**
     * Check if doc is "ui", "for developers", "glossary" or "release-notes" and add a field slug to represent this.
     */
    let docType;
    if (permalink.match(/ui\/[^/]+/)) {
      docType = 'ui';
    } else if (permalink.match(/for-developers\/[^/]+/)) {
      docType = 'for-developers';
    }

    createNodeField({node, name: 'docType', value: docType});

    let cat;
    if (
        Object.prototype.hasOwnProperty.call(node, 'frontmatter')
        && Object.prototype.hasOwnProperty.call(node.frontmatter, 'category')
    ) {
      cat = node.frontmatter.category;
    } else {
      // remove docType prefix
      cat = parsedFilePath.dir.replace(`${docType}`, '');
      cat = cat.split('/');
      cat = (cat.length > 1 && cat[1].length) ? cat[1] : 'uncategorized';
    }

    createNodeField({node, name: 'category', value: cat});

    let group = 'ungrouped';
    if (
        Object.prototype.hasOwnProperty.call(node, 'frontmatter')
        && Object.prototype.hasOwnProperty.call(node.frontmatter, 'group')
    ) {
      group = node.frontmatter.group;
    }
    createNodeField({node, name: 'group', value: group});

    let title;
    if (
        Object.prototype.hasOwnProperty.call(node, 'frontmatter')
        && Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      title = node.frontmatter.title;
    } else {
      title = parsedFilePath.name.replace('-', '');
    }
    createNodeField({node, name: 'title', value: title});
  }
};

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;

  const glossaryPromise = new Promise((resolve, reject) => {

    const glossaryPage = path.resolve('src/templates/glossary.jsx');

    resolve(
        graphql(
            `
            {
              allContentfulPage(
                limit: 2000,   
                filter: { type: { eq: "Glossary Term" }}   
                sort: { fields: [name], order: ASC }
              ) {
                edges {
                  node {
                    id
                    title : name
                    slug
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            reject(result.errors)
          }

          const pages = result.data.allContentfulPage.edges;
          pages.forEach((page, index) => {
            createPage({
              path: '/glossary/' + `${_.kebabCase(page.node.slug)}` + '/',
              component: glossaryPage,
              context: {
                slug: page.node.slug,
                id: page.node.id,
              },
            });
          })
        })
    )
  });


  const knowledgebasePromise = new Promise((resolve, reject) => {
    const docsPage = path.resolve('src/templates/doc.jsx');
    const categoryPage = path.resolve('src/templates/category.jsx');

    resolve(graphql(`
        {
          kb : allContentfulPage(filter: {
                  type: {regex: "/Knowledge Base|How To/"},
                  slug: {ne: null}
               }
          ) {
            edges {
              node {
                id
                slug
                name
                type
                category {
                  id
                  title
                }
                node_locale
                parentPage {
                  id
                  name
                  slug
                }
              }
            }
          }
        }        
      `).then((result) => {
      if (result.errors) {
        /* eslint no-console: "off" */
        reject(result.errors);
      }

      // We use a set because it automatically deduplicates items..
      const kbProductCategories = new Set();
      const developerProductSet = new Set();

      result.data.kb.edges.forEach(({node}) => {
        const { title } = node.category || {}; // ie "How it Works", "Getting Starting". etc.
        const { type : docType } = node; // node.type === docType
        kbProductCategories.add({ parentPage : node.parentPage, type: docType , ...node.category});
        createPage({
          path: ('/docs/' + (node.parentPage && node.parentPage.slug ? (node.parentPage.slug + '/' + node.slug) : node.slug)),
          component: docsPage,
          context: {
            slug: node.slug,
            id: node.id,
          },
        });
      });

      //
      // ** CATEGORIES **
      //

      const kbProductUniqueList = _.uniqWith( Array.from(kbProductCategories) , function(a,b) {
        return a.title === b.title && JSON.stringify(a.parentPage) === JSON.stringify(b.parentPage);
      });
      const kbUniqueDocTypes = _.uniq( _.map(  kbProductUniqueList, 'type') );

      kbProductUniqueList.forEach((category, i) => {
        // Create "/docs/<category-slug>" pages. BUT ONLY if we have a parentPage
        if(category.parentPage) {
          createPage({
            path: `/docs/${_.kebabCase(category.parentPage.slug)}/`,
            component: categoryPage,
            context: {
              parentPage: category.parentPage.id,
              parentPageName : category.parentPage.name,
              categoryTypes: `/${kbUniqueDocTypes.join("|")}/`, // We use this for searching regex...
            }
          });
        }
      });


      const categoryList = Array.from(developerProductSet);
      categoryList.forEach((category, i) => {
        // Create "for-developer" category nodes.
        const cat = {
          id: `${i}`,
          slug: category,
          parent: '__SOURCE__',
          children: [],
          internal: {
            type: 'forDeveloperCategories',
          },
        };

        // add it to contentNode
        cat.internal.contentDigest =  crypto
            .createHash('md5')
            .update(JSON.stringify(cat))
            .digest('hex');

        // Create "/for-developers/<category-slug>" pages.
        createPage({
          path: `/for-developers/${_.kebabCase(category)}/`,
          component: categoryPage,
          context: {
            docType: 'for-developers',
            category,
          },
        });
      });


    }));
  });


  const productPromise = new Promise((resolve, reject) => {

    const productPage = path.resolve('src/templates/product.jsx');

    resolve(
        graphql(
            `
            {
              allContentfulProduct {
                edges {
                  node {
                    id
                    slug
                    name
                    summary
                    node_locale
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            reject(result.errors)
          }

          const pages = result.data.allContentfulProduct.edges;
          pages.forEach((page, index) => {
            createPage({
              path: `/${_.kebabCase(page.node.slug)}`,
              component: productPage,
              context: {
                slug: page.node.slug,
                id: page.node.id,
                node_locale: page.node_locale
              },
            });
          })
        })
    )
  });


  const caseStudyPromise = new Promise((resolve, reject) => {

    const caseStudyPage = path.resolve('src/templates/caseStudy.jsx');

    resolve(
        graphql(
            `
            {
              allContentfulCaseStudy {
                edges {
                  node {
                    id
                    slug
                    node_locale
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            reject(result.errors)
          }

          const pages = result.data.allContentfulCaseStudy.edges;
          pages.forEach((page, index) => {
            createPage({
              path: '/customers/' + `${_.kebabCase(page.node.slug)}`,
              component: caseStudyPage,
              context: {
                slug: page.node.slug,
                id: page.node.id,
                node_locale: page.node_locale
              },
            });
          })
        })
    )
  });


  const integrationPromise = new Promise((resolve, reject) => {

    const integrationPage = path.resolve('src/templates/integration.jsx');

    resolve(
        graphql(
            `
            {
              allContentfulIntegration(filter: { slug: {ne: null}}) {
                edges {
                  node {
                    id
                    slug
                    name
                    node_locale
                    hardRedirect {
                     __typename
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            reject(result.errors)
          }

          // If we have a hardRedirect, just skip it. We cannot filter, because you cannot filter by a UnionType shared
          // by two ContentTypes.


          const pages = result.data.allContentfulIntegration.edges;
          pages.forEach((page, index) => {
            if(page.node.hardRedirect === null) {
              createPage({
                path: `/integrations/${_.kebabCase(page.node.slug)}`,
                component: integrationPage,
                context: {
                  slug: page.node.slug,
                  id: page.node.id,
                  node_locale: page.node.node_locale
                },
              });
            }
          })
        })
    )
  });

  const featuresPromise = new Promise((resolve, reject) => {

    const featuresPage = path.resolve('src/templates/feature.jsx');

    resolve(
        graphql(
            `
            {
              allContentfulPage(filter: {type: {eq: "Feature Page"}, slug: {ne: null}}) {
                edges {
                  node {
                    id
                    slug
                    name
                    node_locale
                    parentPage {
                      id
                      name
                      slug
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            reject(result.errors)
          }
          //  ${page.node.parentPage.slug ? page.node.parentPage.slug : 'features'}
          const pages = result.data.allContentfulPage.edges;

          pages.forEach((page, index) => {
            createPage({
              path: `/features/${_.kebabCase(page.node.slug.toLowerCase())}`,
              component: featuresPage,
              context: {
                slug: page.node.slug,
                id: page.node.id,
                parentId: page.node.parentPage ? page.node.parentPage.id : null,
                node_locale: page.node.node_locale
              },
            });
          })
        })
    )
  });

  //  partnersPromise,
  return Promise.all([knowledgebasePromise, glossaryPromise, productPromise, integrationPromise, caseStudyPromise, featuresPromise]);


};

exports.onCreateWebpackConfig = ({stage, actions}) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({

      module: {
        // noParse: /svg/,
        // rules: [
        //   {
        //     test: /\.svg$/,
        //     exclude: /node_modules/,
        //     use: {
        //       loader: 'svg-react-loader',
        //       options: {
        //         tag: 'symbol',
        //         classIdPrefix: '[name]-[hash:8]__',
        //         attrs: {
        //           title: 'example',
        //         },
        //         name: 'MyIcon',
        //       },
        //     },
        //   }
        // ]
      },
      plugins: [webpackLodashPlugin],
    });
  }
};
