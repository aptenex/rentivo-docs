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
import './doc.scss';
import { render } from '../utils/renderer';
class DocTemplate extends React.Component {
  getLinks() {
    const { data } = this.props;
    console.log( data?.doc?.bodyMarkdown?.childMarkdownRemark?.htmlAst);
    const headers = data?.doc?.bodyMarkdown?.childMarkdownRemark?.htmlAst?.children?.filter(el => el.type === 'element' && _.includes(['h2', 'h3'], el.tagName));
    return headers?.map((header) => {
      const link = {};
      link.tagName = header.tagName;
      link.textNode = header.children[1] ? header.children[1].value : '';
      link.id = header.properties.id;
      return link;
    }) || [];
  }

  render() {
    const { data, location } = this.props;
    const postNode = data.doc;
    const asideLinks = this.getLinks();
    console.log(asideLinks, "whats postnode", postNode, postNode?.body?.json?.content);

    const Body = render( postNode?.body?.json?.content?.length > 0 ?
        postNode?.body.json :
        (postNode?.bodyMarkdown?.childMarkdownRemark?.htmlAst ? postNode?.bodyMarkdown?.childMarkdownRemark?.htmlAst : null) );
    return (
      <Layout location={location} subNav={true}>
        <div className="container-lg doc-wrap">
          <SEO postNode={postNode} postType="doc" />
          { asideLinks.length
            ? (<AsideMenu asideLinks={this.getLinks()} />)
            : null
          }

          <div className="doc-main">
            <h1 dangerouslySetInnerHTML={{ __html: postNode.name }} />
            { Body }

            <Rating />

          </div>
        </div>
      </Layout>
    );
  }
}

export default DocTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query DocPostByID($id: String!) {
    doc : contentfulPage(id: {eq: $id}) {
      ...Page
    }
  }
`;
