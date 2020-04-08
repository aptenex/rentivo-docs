import { useStaticQuery, graphql } from "gatsby"
export const useProductHome = () => {
  const { contentfulFeatureGallery } = useStaticQuery(
      graphql`
        query {
          contentfulFeatureGallery(slug: {eq: "core-products"}) {
                internal {
                  type
                }
                id
                slug
                title
                columnWidth
                items {
                  id
                  title
                  showTitle
                  hasOverlay
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
              }
            }
              
      `
  )
  return contentfulFeatureGallery
}