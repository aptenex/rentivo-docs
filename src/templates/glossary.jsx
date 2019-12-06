import React from 'react';
import { graphql } from 'gatsby';
import RehypeReact from 'rehype-react';
import _ from 'lodash';
import config from '../../data/SiteConfig';
import SEO from '../components/SEO';
import AsideMenu from '../components/AsideMenu';
import CalloutLink from '../componentsMarkdown/CalloutLink';
import Callout from '../componentsMarkdown/Callout';
import Rating from '../components/Rating';
import Gist from '../componentsMarkdown/Gist';
import CodeGroup from '../componentsMarkdown/CodeGroup';
import withSubNav from '../components/NavSub';
import Layout from '../components/DocsLayout';
import './syntax-highlighting.scss';
import './glossary.scss';
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// const renderAst = new RehypeReact({
//   createElement: React.createElement,
//   components: {
//     gist: Gist,
//     'call-out-link': CalloutLink,
//     'call-out': Callout,
//     'code-group': CodeGroup,
//   },
// }).Compiler;

class GlossaryTemplate extends React.Component {




  render() {
    const options = {
      renderMark: {
      },
      renderNode: {
         [BLOCKS.EMBEDDED_ASSET]: (node) => <img  src={node.data.target.fields.file['en-US'].url} />,
        // [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      },
    }
    const { data, location } = this.props;
    const postNode = data.doc;
    // const asideLinks = this.getLinks();

    return (
      <Layout location={location} subNav={true}>
        <div className="container-lg doc-wrap">
          <SEO postNode={postNode} postType="glossary" />

          <div className="doc-main">
            <h1 dangerouslySetInnerHTML={{ __html: postNode.title }} />
            {/*{renderAst(postNode.htmlAst)}*/}
            { documentToReactComponents(postNode.body.json, options) }
            <Rating />

          </div>
        </div>
      </Layout>
    );
  }
}

export default GlossaryTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  
  query GlossaryBySlug($id: String!) {
    doc : contentfulGlossaryTerm(id: {eq: $id}) {
      body {
        id
        body
        json
        nodeType
        internal {
          content
          description
          ignoreType
          mediaType
        }
      }
      slug
      title
      keywords
      category {
        title
        updatedAt
        createdAt
      }
    }
  }
`;
