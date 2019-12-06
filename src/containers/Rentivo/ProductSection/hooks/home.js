import { useStaticQuery, graphql } from "gatsby"
export const useProductHome = () => {
  const { contentfulProductGallery } = useStaticQuery(
      graphql`
        query {
          contentfulProductGallery(slug: {eq: "core-products"}) {            
                id
                slug
                title
                product {
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
              }
            }
              
      `
  )
  return contentfulProductGallery
}