import React, {PropTypes} from 'react';


const SidebarUser = ({avatar, username}) =>
  <div className="Sidebar-user">
    <img className="Sidebar-userImage" src={avatar} />
    <p className="Sidebar-userName"> @{username} </p>
  </div>
;

SidebarUser.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};


export default SidebarUser;
