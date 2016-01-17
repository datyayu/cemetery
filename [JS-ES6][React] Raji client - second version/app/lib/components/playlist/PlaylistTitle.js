import React from 'react';


const PlaylistTitle = ({showInfo}) =>
  showInfo ?
    <p className="Playlist-title"> Current playlist </p>
  :
    <p className="Playlist-title"> Songs in this Playlist </p>
;


PlaylistTitle.propTypes = { showInfo: React.PropTypes.bool };
PlaylistTitle.defaultProps = { showInfo: true };


export default PlaylistTitle;
