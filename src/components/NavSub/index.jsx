import React from 'react';
import Search from '../Search';
import BreadCrumbs from '../BreadCrumbs';
import './NavSub.scss';

const SubNav = (props) => {
  const addAllClasses = ['nav-sub'];
  if (props.className) {
    addAllClasses.push(props.className);
  }
  return (

      <div className={addAllClasses.join(' ')}>
        <div className="container-lg">
          <div className="row">
            <div className="col-md-8">
              <BreadCrumbs {...props} />
            </div>
            <div className="col-md-4">
              <Search />
            </div>
          </div>
        </div>
      </div>
  );
}

export default SubNav;
