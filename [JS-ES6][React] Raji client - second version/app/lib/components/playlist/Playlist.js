import React from 'react';
import PlaylistItem from './PlaylistItem';
import PlaylistTitle from './PlaylistTitle';
import PlaylistInfo from './PlaylistInfo';


const Playlist = ({playlist, currentSongId, showInfo=false, isPlaying=false}) =>
  <div className="Playlist">
    <PlaylistTitle showInfo={showInfo} />
    <PlaylistInfo show={!!playlist && showInfo} {...playlist} />
    {
      playlist === null ?
        <img src="/assets/img/spinner_dark.gif" />
      :
        <ul className="Playlist-songList">
        {
          playlist.songs.map((song) =>
            <PlaylistItem key={song.id}
                          song={song}
                          isPlaying={isPlaying}
                          currentSongId={currentSongId} />
          )
        }
        </ul>
      }
  </div>
;


Playlist.propTypes = {
  showInfo: React.PropTypes.bool,
  isPlaying: React.PropTypes.bool,
  currentSongId: React.PropTypes.string,
  playlist: React.PropTypes.shape({
    info: React.PropTypes.object,
    songs: React.PropTypes.arrayOf(React.PropTypes.object)
  })
};



export default Playlist;
