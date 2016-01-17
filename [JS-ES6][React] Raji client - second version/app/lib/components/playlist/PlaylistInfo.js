import React, {PropTypes} from 'react';


const PlaylistInfo = ({image, artists, title, show=false}) =>
  !show ? <div/> :
    !image || !artists || !title ?
      <img src="/assets/img/spinner_dark.gif"/>
    :
      <div className="Playlist-info is-active">
        <img className="Playlist-infoImage" src={image} />
        <div className="Playlist-infoText">
          <p className="Playlist-text"> {title} </p>
          <p className="Playlist-text"> by {artists.join(',')} </p>
        </div>
      </div>
;


PlaylistInfo.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  show: PropTypes.bool,
  artists: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PlaylistInfo;
