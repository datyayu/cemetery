import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const SidebarItem = ({icon, link, text}) =>
  <li className="Sidebar-item">
    <Link to={link} className="Sidebar-link">
      <i className={`fa fa-${ icon } Sidebar-icon`}></i>
      <p className="Sidebar-text"> {text} </p>
    </Link>
  </li>
;

SidebarItem.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};


export default SidebarItem;
