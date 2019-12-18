import React from 'react';
import { graphql } from 'gatsby';
import _ from 'lodash';
import SEO from '../components/SEO';
import AsideMenu from '../components/AsideMenu';
import ReleaseKey from '../components/ReleaseNotes/ReleaseKey';
import ReleaseNotePost from '../components/ReleaseNotes/ReleaseNotePost';
import withSubNav from '../components/NavSub';
import './release-notes.scss';
import Layout from '../components/DocsLayout';

class ReleaseNotes extends React.Component {
  getAsideLinks() {
    const { data } = this.props;
    const { edges } = data.allContentfulReleaseNote;
    const overview = {
      tagName: 'h2',
      textNode: 'Overview',
      id: 'overview',
    };

    const asideLinks = edges.map((edge) => {
      const link = {};
      link.tagName = 'h2';
      link.textNode = edge.node.releaseDate;
      link.id = _.kebabCase(edge.node.releaseDate);
      return link;
    });

    return [overview, ...asideLinks];
  }

  render() {
    const { data, location } = this.props;
    const { edges } = data.allContentfulReleaseNote;
    const asideLinks = this.getAsideLinks();
    return (
      <Layout location={location} subNav={true}>
        <div className="container-lg">
          <SEO postNode={this.props} title="Rentivo Release Notes" description="Rentivo PMS for Vacation Rentals Release Notes" />
          <div className="row">
            <div className="col-md-3">
              <AsideMenu asideLinks={asideLinks} pageType="release-notes" />
            </div>
            <div className="col-md-9">
              <h1>Release Notes</h1>
              <div className="release-notes-overview m-bottom-6">
                <h2 className="hidden">
                  <a href="#overview" className="anchor" data-slug="overview">Overview</a>
                </h2>
                <p className="is-size-h3">
                  Release and product announcements for all of Rentivo's products and brands.
                  {' '}

                </p>
                <p className="is-size-h3">Some categories featured in our release notes include:</p>
              </div>
              <ReleaseKey />
              {edges.map(edge => (
                <ReleaseNotePost
                  key={edge.node.releaseDate}
                  node={edge.node}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>

    );
  }
}

export default ReleaseNotes;

export const pageQuery = graphql`
  query releaseNote {
    allContentfulReleaseNote(sort: {fields: releaseDate, order: DESC}) {
      edges {
        node {
          id
          title
          releaseDate
          releaseType
          body {
            childMarkdownRemark {
              htmlAst
              html
              rawMarkdownBody
            }
          }
        }
      }
    }
  }
`;
