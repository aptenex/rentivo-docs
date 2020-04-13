import RehypeReact from "rehype-react";
import React from "react";
import Gist from "../componentsMarkdown/Gist";
import CalloutLink from "../componentsMarkdown/CalloutLink";
import Callout from "../componentsMarkdown/Callout";
import CodeGroup from "../componentsMarkdown/CodeGroup";
import TextLoop from "react-text-loop";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import * as ReactDOM from "react-dom";

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    gist: Gist,
    'call-out-link': CalloutLink,
    'call-out': Callout,
    'code-group': CodeGroup,
    TextLoop: TextLoop
  },
}).Compiler;

const options = {};

export const render = (json) => {

  return json?.nodeType === 'document' ?
       documentToReactComponents(json, options)  :
          renderAst(json);
};
export default renderAst;