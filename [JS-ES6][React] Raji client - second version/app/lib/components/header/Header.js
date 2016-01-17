import React from 'react';


const Header = ({title, includePlaylist}) =>
  <div className="Header">
    <i className="fa fa-navicon Header-menuIcon" />
    <h1 className="Header-title"> {title} </h1>
    {
      includePlaylist ?
        <i className="fa fa-arrow-left Header-playlistIcon" /> : null
    }
  </div>
;


export default Header;
