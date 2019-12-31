import { useStaticQuery, graphql } from "gatsby"
import sortBy from "lodash/sortBy"

export const useFAQGroupsOnCategories = () => {
  const { allContentfulFaqByCategory } = useStaticQuery(
      graphql`
        query {
          allContentfulFaqByCategory : allContentfulFaq(filter: {group: {regex: "/General|Bill/"}}) {
            distinct(field: group)
            group(field: group) {
              edges {
                node {
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
            }
          }
        }
      `
  )
  return allContentfulFaqByCategory;
}