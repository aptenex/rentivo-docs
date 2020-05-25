import RehypeReact from "rehype-react";
import React from "react";
import Gist from "../componentsMarkdown/Gist";
import CalloutLink from "../componentsMarkdown/CalloutLink";
import Callout from "../componentsMarkdown/Callout";
import CodeGroup from "../componentsMarkdown/CodeGroup";
import TextLoop from "react-text-loop";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Link from 'gatsby-link';
const { BLOCKS, MARKS, INLINES } = require('@contentful/rich-text-types');
import _ from 'lodash';
import Image from 'gatsby-image';
import * as ReactDOM from "react-dom";
import HeroSection from "../containers/Rentivo/HeroSection";
import FeatuetteSection from "../containers/Rentivo/FeaturetteSection";
import unified from 'unified';
import markdown from  'remark-parse';
import remark2rehype from 'remark-rehype';
import doc from 'rehype-document';
import format from 'rehype-format';
import html from 'rehype-stringify';
import remark2string from 'rehype-stringify';
import rehype2react from 'rehype-react'
import Remark from 'remark';
import PageAnchor from "../componentsMarkdown/PageAnchor";
import ListItem from "../componentsMarkdown/ListItem";

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    gist: Gist,
    'call-out-link': CalloutLink,
    'call-out': Callout,
    'code-group': CodeGroup,
    'list' : ( {node,children}) => { return(<ul>
      {children}
      </ul>) },
    'item'  : ListItem,
    TextLoop: TextLoop
  },
}).Compiler;


// http://jsfiddle.net/2cq5zf9y/
// http://jsfiddle.net/7c8byprq/

const transform = (fields, index) => {
  if(typeof fields === 'string' || typeof fields === 'boolean' ) {
    // If we have a content.. transform into markdown
    //  || index === 'callout'
    if(index === 'content'){
      let processor = unified()
          .use(markdown)
          .use(remark2rehype)
          .use(rehype2react, {createElement: React.createElement, components: {
              'callout': Callout
            }});
      let contents =   processor.processSync( fields).contents;

      return { 'childMarkdownRemark' : { 'component' : contents } };
    }
    return fields;
  }
  if(typeof fields === 'object' && 'fields' in fields){
    return transform(fields['fields']);
  }
  return _.mapValues(fields, (item, index) => {

    if(typeof item === 'string') {
      return item;
    }

    if( typeof item === 'object' && 'en-US' in item){
      if(item['en-US'] instanceof Array){
        return _.map( item['en-US'], ( img ) => {
          return transform(img.fields)
        });
      }
      return transform( item['en-US'], index);
    }

    return typeof item !== 'object' ? item : { item : fields };
  });
};
const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <Text>{children}</Text>
      },
      [BLOCKS.HEADING_1]: (node, children) => {
        return <Heading mt={'2rem'} as={'h2'}>{children}</Heading>
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        let clone = _.clone(node);
        clone.nodeType = 'document';
        return <Heading mt={'2rem'} id={_.kebabCase(renderPlaintext(clone).toLowerCase())} as={'h2'}>{ children }</Heading>
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        return <Heading mt={'2rem'} id={_.kebabCase(node.content[0].value)} as={'h3'}>{children}</Heading>
      },
      [BLOCKS.HEADING_4]: (node, children) => {
        return <Heading id={_.kebabCase(node.content[0].value)} as={'h4'}>{children}</Heading>
      },
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        console.log('naodnaosdnasodnasodn', node, children);
        // If given link begins with a single `/`, treat as internal Gatsby Link
        return /^\/(?!\/)/.test(node.data.uri)
            ? `<Link to="${node.data.uri}">{ children }</Link>`
            : `<a href="${node.data.uri}">{ children }</a>`
      },
      [BLOCKS.EMBEDDED_ASSET] : (node) => {
        console.log('asdasdad', node);
        if(node.data.target.sys.type === 'Link'){
          return <></>;
        }
        const { title, description, file } = node.data.target.fields || {};
        const mimeType = file['en-US'].contentType;
        const mimeGroup = mimeType.split('/')[0];

        switch (mimeGroup) {
          case 'image':
            return <img
                title={ title ? title['en-US'] : null}
                alt={description ?  description['en-US'] : null}
                src={file['en-US'].url}
            />
          case 'video':
            return <video width="100%" autoplay controls="controls">
              <source src={ file['en-US'].url } type="video/mp4" />
            </video>
          case 'application':
            return <a
                href={file['en-US'].url}
            >{ title ? title['en-US'] : file['en-US'].details.fileName }
            </a>
          default:
            return <span style={{backgroundColor: 'red', color: 'white'}}> {mimeType} embedded asset </span>
        }

      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        // If this isn't working, there seems to be a bug on contentful??
        // https://github.com/gatsbyjs/gatsby/issues/10592
        // https://github.com/gatsbyjs/gatsby/pull/15084
        switch(node.data.target.sys.contentType.sys.id){
          case 'hero':
            return <HeroSection key={node.data.target.sys.id}  {... transform( node.data.target.fields) }/>;
          break;
          case 'featurette':
            return <FeatuetteSection key={node.data.target.sys.id}  {... transform( node.data.target.fields) }/>;
            break;
          default:
            return <span style={{padding: '20px', backgroundColor: 'red', color: 'white'}}>missing embedded asset { node.data.target.sys.contentType.sys.id } </span>
        }
      },
    },
    /*
     * Defines custom html string for each mark type like bold, italic etc..
     */
    renderMark: {

    }
};

export const render = (json) => {
  return json?.nodeType === 'document' ?
       documentToReactComponents(json, richTextOptions)  :
          json ? renderAst(json) : null;
};

export const renderPlaintext = (json) => {

  if(json && ( json.nodeType === null && json.htmlAst === null) ){
    console.error('You must send a htmlAst from markdownRemark or a richtext-type');
  }

  return json?.nodeType === 'document' ?
      documentToPlainTextString(json)  :
      json ? renderAst(json) : null;
};

export const renderPage = (postNode) => {
  return render(postNode?.body?.json?.content?.length > 0 ?
      postNode?.body.json :
      (postNode?.bodyMarkdown?.childMarkdownRemark?.htmlAst ? postNode?.bodyMarkdown?.childMarkdownRemark?.htmlAst : null));
}
export default renderAst;