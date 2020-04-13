import React, {Fragment, useContext} from 'react';
import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ProductsDropdown  from "../DesktopNav/DropdownContents/ProductsDropdown"
import { DrawerContext } from 'common/src/contexts/DrawerContext';
import CompanyDropdown from "../DesktopNav/DropdownContents/CompanyDropdown"
import DevelopersDropdown from "../DesktopNav/DropdownContents/DevelopersDropdown"
import LearnDropdown from "../DesktopNav/DropdownContents/LearnDropdown"
const MobileNav = ({ className, drawerClose, ...props }) => {
  const { dispatch } = useContext(DrawerContext);
  // empty array for scrollspy items
  const scrollItems = [];


  // Add all classs to an array
  const addAllClasses = ['scrollspy__menu'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // Close drawer when click on menu item
  const toggleDrawer = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <Scrollspy
      items={scrollItems}
      className={addAllClasses.join(' ')}
      drawerClose={drawerClose}
      {...props}
    >
      <Fragment>
        <h4>Rentivo</h4>
        <ProductsDropdown/>
        <CompanyDropdown/>
        <LearnDropdown/>
      </Fragment>
    </Scrollspy>
  );
};

MobileNav.propTypes = {
  /** className of the ScrollSpyMenu. */
  className: PropTypes.string,

  /** Class name that apply to the navigation element paired with the content element in viewport. */
  currentClassName: PropTypes.string,

  /** Class name that apply to the navigation elements that have been scrolled past [optional]. */
  scrolledPastClassName: PropTypes.string,

  /** HTML tag for Scrollspy component if you want to use other than <ul/> [optional]. */
  componentTag: PropTypes.string,

  /** Style attribute to be passed to the generated <ul/> element [optional]. */
  style: PropTypes.object,

  /** Offset value that adjusts to determine the elements are in the viewport [optional]. */
  offset: PropTypes.number,

  /** Name of the element of scrollable container that can be used with querySelector [optional]. */
  rootEl: PropTypes.string,

  /**
   * Function to be executed when the active item has been updated [optional].
   */
  onUpdate: PropTypes.func,
};

MobileNav.defaultProps = {
  componentTag: 'ul',
  currentClassName: 'is-current',
};

export default MobileNav;
