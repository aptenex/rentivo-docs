import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/SEO';
import './glossary.scss';
import withSubNav from '../components/NavSub';
import Layout from '../components/layout';

class Glossary extends React.Component {
  constructor(props) {
    super(props);
    this.glossary = this.alphaEdges();
  }

  alphaEdges() {
    const { data } = this.props;
    const { edges } = data.glossary;
    const groupedEdges = {};

    edges.forEach((edge) => {
      const sortChar = edge.node.title.slice(0, 1);

      if (sortChar in groupedEdges) {
        groupedEdges[sortChar].push(edge);
      } else {
        groupedEdges[sortChar] = [edge];
      }
    });

    return groupedEdges;
  }

  render() {
    const { location } = this.props;
    return (
      <Layout location={location} subNav={true}>
        <div className="container">
          <SEO postNode={this.props} title="Glossary" description="Rentivo Glossary of Terms" />
          <h1>Glossary</h1>
          <div className="row">
            {Object.keys(this.glossary).map(key => (
              <div key={key} className="col-md-6 glossary-alpha-section">
                <h3>{key}</h3>
                {this.glossary[key].map(edge => (
                  <Link
                    key={edge.node.title}
                    to={`glossary/` + edge.node.slug}
                  >
                    {edge.node.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Glossary;

export const pageQuery = graphql`
  query glossary {
    glossary: allContentfulGlossaryTerm(
      limit: 2000,      
      sort: { fields: [title], order: ASC }
    ) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`;
