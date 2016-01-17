import React, {PropTypes} from 'react';
import SidebarItem from './SidebarItem';
import SidebarUser from './SidebarUser';
import SidebarLogo from './SidebarLogo';


const Sidebar = ({items, logo, user}) =>
  <div className="Sidebar">
    <ul className="Sidebar-list">
      <SidebarLogo image={logo.image} text={logo.text}/>
      {
        items.map((item, index) =>
          <SidebarItem key={index} text={item.text} link={item.link} icon={item.icon} />
        )
      }
    </ul>
    <SidebarUser {...user} />
  </div>
;

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  logo: PropTypes.shape({
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired
};


export default Sidebar;
