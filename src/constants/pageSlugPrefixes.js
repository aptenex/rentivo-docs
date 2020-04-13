export const getFullPath = (linkToPage) => {
    if(linkToPage.internal.type === 'ContentfulPage'){
      if( linkToPage?.type && linkToPage?.parentPage.slug) {
        return linkToPage.type === 'Knowledge Base' ?
            Types[linkToPage.internal.type + '_' + linkToPage.type] + '/' + linkToPage.parentPage.slug + '/' + linkToPage.slug :
            null;
      }
      return Types[linkToPage.internal.type] + '/' + linkToPage.slug;
    }

    return Types[linkToPage.internal.type] + '/' +linkToPage.slug;
};

export const Types = {
  'ContentfulPage' : '/features',
  'ContentfulPage_Knowledge Base' : '/docs',
  'ContentfulProduct' : ''
};

