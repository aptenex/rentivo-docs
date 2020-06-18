import {renderPlaintext, transform} from "../utils/renderer";
import _ from 'lodash';
export const getFullPath = (linkToPage) => {


    if(linkToPage.hasOwnProperty('fields') && linkToPage.hasOwnProperty('sys')){
      let internal = { type : SysIdMap[linkToPage.sys?.contentType?.sys?.id]};
      linkToPage = transform(linkToPage.fields);
      linkToPage.internal = internal;
    }
    let type = linkToPage.internal.type;

    if(type === 'ContentfulPage'){
      if( linkToPage?.type && linkToPage?.parentPage?.slug && (
          linkToPage.type === 'Knowledge Base' || linkToPage.type === 'How To')) {
        return Types[type + '_' + linkToPage.type] + '/' + _.kebabCase(linkToPage.parentPage.slug) + '/' + _.kebabCase(linkToPage.slug);
      }
      if(linkToPage?.type === 'Feature Page'){
        return Types[type] + '/' + _.kebabCase(linkToPage.slug.toLowerCase());
      }

      return (Types[type + '_' + linkToPage.type] || Types[type]) + '/' + _.kebabCase(linkToPage.slug);
    }

    if(!linkToPage.hasOwnProperty('slug') || linkToPage.slug === null){
      return null;
    }

    return Types[type] + '/' + _.kebabCase(linkToPage.slug);
};
const SysIdMap = {
  'page' : 'ContentfulPage',
  'hero' : null
}
export const Types = {
  'ContentfulIntegration' : '/integrations',
  'ContentfulPage' : '/features',
  'ContentfulPage_Knowledge Base' : '/docs',
  'ContentfulPage_Feature Page' : '/docs',
  'ContentfulPage_How To' : '/docs',
  'ContentfulProduct' : ''
};

