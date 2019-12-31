/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from 'react';
import {graphql} from "gatsby";
export const featuretteFields = graphql`
  fragment FeatureItem on ContentfulFeatureItemBlock {
    
      id
      title
      description {
        childMarkdownRemark {
          html
        }
        description
      }

      image {
        fixed(height: 125) {
          ...GatsbyContentfulFixed_tracedSVG
        }
        ... on ContentfulAsset {
          svg {
            content # SVG content optimized with SVGO                        
            dataURI # Optimized SVG as compact dataURI
            absolutePath #
            relativePath #
          }
          file {
            contentType
            url
            fileName
            contentType
            details {
              image {
                width
                height
              }
            }
          }
        }
      }
  }
  
  
  fragment FAQ on ContentfulFaq {
      internal {
        type
      }
      id
      question
      answer {
        answer
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      group
      items {
        internal {
          type
        }
        id
        question
        answer {
          answer
          childMarkdownRemark {
            html
            rawMarkdownBody
          }
        }
        group       
      }
  }
  
  fragment FeatureGallery on ContentfulFeatureGallery {
      internal {
        type
      }
      id
      slug
      title
      columnWidth
      borderlessItems
      items {        
        ...FeatureItem
      }
    }
 
  
  
  fragment Hero on ContentfulHero {
    internal {
      type
    }
    id
    title
    textLoopAst {
      id 
      internal {
        content
      }      
    }
    features {
      ...FeatureItem
    }
    as
    lottieJson {
      file {
        url
      }
    }
    primaryCallToAction {
      url
      to
      parentBlank
      text
    }
    secondaryCallToAction {
      url
      to
      parentBlank
      text
    }
    tagline
    
  }
  fragment Featurette on ContentfulFeaturette {
    internal {
      type
    }
    id
    title
    backgroundParticles
    content {
      content
      childMarkdownRemark {
        html
      }
    }
    callout {
      childMarkdownRemark {
        id
        html
        rawMarkdownBody
        htmlAst
      }
    }
    oversize,
    reverse,
    image {
      id
      fluid(
        maxWidth: 1240
        background: "rgb:000000"
      ) {
        ...GatsbyContentfulFluid
      }
      ... on ContentfulAsset {
        svg {
          content
          dataURI
          absolutePath
          relativePath
        }
        file {
          contentType
          url
          fileName
          contentType
          details {
            image {
              width
              height
            }
          }
        }
      }
    }
    backgroundHeroImage {
      id
      fluid(maxWidth: 1960, background: "rgb:000000") {
        ...GatsbyContentfulFluid
      }


    }
    callToAction {
      url
      to
      parentBlank
      text
    }
   
  }
`

// learnMoreMenu {
//   id
//   menuItems {
//     text
//     to
//     url
//     parent {
//       id
//     }
//   }
// }