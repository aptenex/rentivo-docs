import { useStaticQuery, graphql } from "gatsby"
import sortBy from "lodash/sortBy"

export const getMenuProducts = () => {
  const data = useStaticQuery(
      graphql`
        query {
          allContentfulProduct(filter: {pinnedProduct: {eq: true}}) {
            edges {
              node {
                id
                name
                summary
                pinnedProduct
                slug
                icon {
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
              }
            }
          }


          allContentfulIntegration(filter: {type: {eq: "Channel"}}) {
            edges {
              node {
                id
                name
                slug
                tileIcon {
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
                howItWorks {
                  id
                }
                heroFeaturette {
                  image {
                    id
                  }
                  id
                  content {
                    id
                  }
                  callout {
                    id
                    childMarkdownRemark {
                      html
                      htmlAst
                    }
                  }
                  callToAction {
                    id
                  }
                  backgroundParticles
                  backgroundHeroImage {
                    id
                    file {
                      url
                      fileName
                      contentType
                    }
                    fixed {
                      base64
                      tracedSVG
                      aspectRatio
                      width
                      height
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                    }
                    fluid {
                      base64
                      tracedSVG
                      aspectRatio
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                      sizes
                    }
                    description
                  }
                  title
                  reverse
                  oversize
                  
                }
                logo {
                  id
                }
                minimumUnits
                partnerCost
                onboardingSchedule
                summary {
                  childMarkdownRemark {
                    html
                    htmlAst
                  }
                }
              }
            }
          }
          
          
        }   
      `
  )
  return data;
}