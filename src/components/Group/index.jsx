import { Link } from 'gatsby';
import React from 'react';
import _ from 'lodash';
import { getFullPath } from '../../constants/pageSlugPrefixes';
import PageTypeLabel from '../../containers/Rentivo/PageTypeLabel';
import styled from "styled-components";
function Group(props) {
  const sort = _.sortBy(props.edges, [function (o) { return o.node?.order; }]);
  const Row = styled('div')`
    display: flex;
    display: flex;
    align-items: center;
    
    label {
      opacity: 0.7;
    }
    &:hover {
      label {
        opacity: 0.9;
      }
    }
    a {
      display: inline;
    }
  `;
  return (
    <div className="group-links">
      {sort.map((doc) => {
        const {
          slug,
          name,
        } = doc.node;
        return <Row key={doc.node.id}>
            <div><PageTypeLabel hideLabel={true} type={doc.node.type} /></div>
            <div>
              <Link
                  key={slug}
                  to={getFullPath( doc.node, slug )}
              >{ name }</Link>
            </div>
        </Row>;

      })}
    </div>
  );
}

export default Group;
