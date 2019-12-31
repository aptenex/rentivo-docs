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