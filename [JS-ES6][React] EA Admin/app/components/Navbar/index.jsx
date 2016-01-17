import React, {PropTypes} from 'react';
import NavbarLink from './NavbarLink';


const Navbar = ({ items }) =>
  <nav className="Navbar">
    {
      items.map((item, idx) => <NavbarLink key={idx} item={item} />)
    }
  </nav>
;

Navbar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default Navbar;
