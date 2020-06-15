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

      <nav className={addAllClasses.join(' ')}>
        <div className="container-lg">
          <div className="row">
            <div className="col-md-8">
              <BreadCrumbs {...props} product={props?.product} />
            </div>
            <div className="col-md-4">
              <Search />
            </div>
          </div>
        </div>
      </nav>
  );
}

export default SubNav;
