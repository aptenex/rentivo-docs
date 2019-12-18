/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from 'react';
import {graphql} from "gatsby";
export const featuretteFields = graphql`

  fragment Featurette on ContentfulFeaturette {
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