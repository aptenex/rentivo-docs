import React from 'react';
import './api-reference.scss';
import Layout from '../components/DocsLayout';

function stopLight({ location }) {
  return (
    <Layout location={location}>
      <div className="container container-stoplight">
        <div className="iframe-container">
          <iframe width="1500" height="1000" title="Rentivo API" src="https://www.rentivo.com" frameBorder="0" />
        </div>
      </div>
    </Layout>
  );
}

export default stopLight;
