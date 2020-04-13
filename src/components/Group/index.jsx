import { Link } from 'gatsby';
import React from 'react';
import _ from 'lodash';
import { getFullPath } from '../../constants/pageSlugPrefixes';

function Group(props) {
  const sort = _.sortBy(props.edges, [function (o) { return o.node?.order; }]);
  return (
    <div className="group-links">
      {sort.map((doc) => {
        const {
          slug,
          name,
        } = doc.node;
        return <Link
            key={slug}
            to={getFullPath( doc.node, slug )}
        >{ name }</Link>;

      })}
    </div>
  );
}

export default Group;
