import React from 'react';
import { graphql } from 'gatsby';
import _ from 'lodash';
import Group from '../components/Group';
import CATEGORIES from '../constants/categories';
import SEO from '../components/SEO';
import GROUPS from '../constants/groups';
import Layout from '../components/DocsLayout';
import './category.scss';

class CategoryTemplate extends React.Component {
  static sortGroups(groupEdges) {

    const groupsEdgesWithOrder = groupEdges.map((edge) => {
      const order = GROUPS[edge.fieldValue] ? GROUPS[edge.fieldValue].order : null;
      return { ...edge, order };
    });

    const groupEdgesSorted = _.sortBy(groupsEdgesWithOrder, ['order', 'name']);
    return groupEdgesSorted;
  }

  renderGroups() {
    const { data } = this.props;
    const sortedGroups = CategoryTemplate.sortGroups(data.docs.group);

    return sortedGroups.map((group) => {
      const title = GROUPS[group.fieldValue] ? GROUPS[group.fieldValue].name : group.fieldValue;
      return (
        <div key={group.fieldValue} className="category-container col-md-6">
          <h2>{title}</h2>
          <Group edges={group.edges} />
        </div>
      );
    });
  }

  render() {
    const { pageContext, location } = this.props;
    const { categoryTitle } = pageContext;
    // If we don't have a "pretty category", make one out of the category context.
    const title = CATEGORIES[categoryTitle] ? CATEGORIES[categoryTitle] : categoryTitle.replace(/-/g, ' ');
    return (
      <Layout location={location} subNav={true}>
        <div className="category-container container">
          <SEO postNode={  this.props} postType="category" />
          <h1 className="page-title">Category: {title}</h1>
          <div className="row">
            {this.renderGroups()}
          </div>
        </div>
      </Layout>
    );
  }
}

export default CategoryTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($parentPage: String, $docType: String) {
    docs: allContentfulPage(
      limit: 1000
      sort: { fields: [name], order: ASC }
      filter: {
        type: {eq: $docType}
        parentPage: { id : { eq: $parentPage} }        
      }
    ) {
    group(field: category___title) {
        totalCount
        fieldValue
        edges {
          node {
            ...Page             
          }
        }
      }
    }
  }
`;
