import {renderPlaintext, transform} from "../utils/renderer";

export const getFullPath = (linkToPage) => {


    if(linkToPage.hasOwnProperty('fields') && linkToPage.hasOwnProperty('sys')){
      let internal = { type : SysIdMap[linkToPage.sys?.contentType?.sys?.id]};
      linkToPage = transform(linkToPage.fields);
      linkToPage.internal = internal;
    }
    let type = linkToPage.internal.type;

    if(type === 'ContentfulPage'){
      console.log("LINK TO PAGE", linkToPage);
      if( linkToPage?.type && linkToPage?.parentPage.slug && (
          linkToPage.type === 'Knowledge Base' || linkToPage.type === 'How To')) {
        return Types[type + '_' + linkToPage.type] + '/' + linkToPage.parentPage.slug + '/' + linkToPage.slug;
      }
      if(linkToPage?.type === 'Feature Page'){
        return Types[type] + '/' + linkToPage.slug;
      }

      return (Types[type + '_' + linkToPage.type] || Types[type]) + '/' + linkToPage.slug;
    }

    if(!linkToPage.hasOwnProperty('slug') || linkToPage.slug === null){
      return null;
    }

    return Types[type] + '/' + linkToPage.slug;
};
const SysIdMap = {
  'page' : 'ContentfulPage',
  'hero' : null
}
export const Types = {
  'ContentfulPage' : '/features',
  'ContentfulPage_Knowledge Base' : '/docs',
  'ContentfulPage_Feature Page' : '/docs',
  'ContentfulPage_How To' : '/docs',
  'ContentfulProduct' : ''
};

