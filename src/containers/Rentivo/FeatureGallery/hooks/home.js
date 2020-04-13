import { useStaticQuery, graphql } from "gatsby"
export const useProductHome = () => {
  const { contentfulFeatureGallery } = useStaticQuery(
      graphql`
        query {
          contentfulFeatureGallery(slug: {eq: "core-products"}) {
            ...FeatureGallery
          }
        }
              
      `
  )
  return contentfulFeatureGallery
}