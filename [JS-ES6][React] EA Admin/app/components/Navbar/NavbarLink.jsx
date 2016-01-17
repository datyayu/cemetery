import React, {PropTypes} from 'react';

const NavbarLink = ({ item }) =>
  <a className="NavbarLink" href={`/${ item.toLowerCase() }`}> {item} </a>
;

NavbarLink.propTypes = {
  item: PropTypes.string.isRequired,
};


export default NavbarLink;
