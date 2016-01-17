import React, {PropTypes} from 'react';


const PlaylistItem = ({currentSongId, song, isPlaying=false}) =>
  <li className={`Song ${currentSongId === song.id ? 'is-playing' : ''}`} >
    <div className="Song-info">
      <img className="Song-image" src={song.image} />

      <div className="Song-desc">
        <p className="Song-text"> {song.title} </p>
        {
          song.artists.map((artist, index) =>
            <p key={index} className="Song-text"> {song.artists} </p>
          )
        }
      </div>

      <div className="Song-icons">
        <i className={`fa Song-icon fa-${isPlaying && currentSongId === song.id ? 'pause' : 'play'}`}>
        </i>
        <i className="fa fa-heart Song-icon"></i>
        <i className="fa fa-plus Song-icon"></i>
      </div>
    </div>
  </li>
;


React.propTypes = {
  isPlaying: PropTypes.bool,
  currentSongId: PropTypes.string,
  song: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
};


export default PlaylistItem;
