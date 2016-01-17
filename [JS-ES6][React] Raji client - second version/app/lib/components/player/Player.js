import React from 'react';
import Header from '../header/Header';
import SongInfo from './SongInfo';
import ProgressBar from './ProgressBar';
import Controls from './Controls';


const Player = ({song, playerState}) =>
  <div className="Player">
    <Header title="Now Playing" includePlaylist={true} />
    <SongInfo {...song} />
    <ProgressBar {...playerState} />
    <Controls {...playerState} />
  </div>
;



export default Player;
