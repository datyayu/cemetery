import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const SidebarLogo = ({image, text}) =>
  <li className="Sidebar-item">
    <Link className="Sidebar-logo" to="/">
      <img className="Sidebar-logo-image" src={image}/>
      <p className="Sidebar-logo-text"> {text} </p>
    </Link>
  </li>
;

SidebarLogo.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};


export default SidebarLogo;
