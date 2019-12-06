import { useStaticQuery, graphql } from "gatsby"
import sortBy from "lodash/sortBy"

export const useFAQGroupsOnHome = () => {
  const { allContentfulFaq } = useStaticQuery(
      graphql`
        query {
          allContentfulFaq(filter: {group: {regex: "/General|Bill/"}}) {
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
  return allContentfulFaq;
}