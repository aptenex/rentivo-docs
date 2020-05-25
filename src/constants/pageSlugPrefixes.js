export const getFullPath = (linkToPage) => {
    if(linkToPage.internal.type === 'ContentfulPage'){
      console.log("LINK TO PAGE", linkToPage);
      if( linkToPage?.type && linkToPage?.parentPage.slug && (
          linkToPage.type === 'Knowledge Base' || linkToPage.type === 'How To')) {

        return Types[linkToPage.internal.type + '_' + linkToPage.type] + '/' + linkToPage.parentPage.slug + '/' + linkToPage.slug;
      }
      if(linkToPage?.type === 'Feature Page'){
        return Types[linkToPage.internal.type] + '/' + linkToPage.slug;
      }

      return (Types[linkToPage.internal.type + '_' + linkToPage.type] || Types[linkToPage.internal.type]) + '/' + linkToPage.slug;
    }

    return Types[linkToPage.internal.type] + '/' +linkToPage.slug;
};

export const Types = {
  'ContentfulPage' : '/features',
  'ContentfulPage_Knowledge Base' : '/docs',
  'ContentfulPage_Feature Page' : '/docs',
  'ContentfulPage_How To' : '/docs',
  'ContentfulProduct' : ''
};

