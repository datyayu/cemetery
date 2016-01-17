import React from 'react';
import {playlist} from '../mock-info';
import Player from '../components/player/Player';
import Playlist from '../components/playlist/Playlist';

const playerState = {
  isPlaying: false,
  isRandom: false,
  isMuted: false,
  maxTime: 300,
  currentTime: 102
};

const NowPlaying = () =>
  <div className="content">
    <Player song={playlist.songs[0]} playerState={playerState}/>
    <Playlist playlist={playlist}/>
  </div>
;


export default NowPlaying;
