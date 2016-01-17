/* eslint-env browser */
import Immutable from 'immutable'
import alt from '../utils/alt.js'
import PlayerActions from '../actions/PlayerActions.js'


class PlayerStore {
  constructor () {
    // Store data.
    this.playlist        = null
    this.prevSong        = null
    this.currentSong     = null
    this.nextSong        = null
    this.currentIndex    = 0
    this.currentTime     = 0
    this.currentDuration = 0
    this.volumeLevel     = 0

    // Player State.
    this.playerIsLooped  = false
    this.playerIsRandom  = false
    this.playerIsPlaying = false
    this.playerIsMuted   = false

    this.bindListeners({
      updatePlaylist: PlayerActions.UPDATE_PLAYLIST,
      updateCurrentTime: PlayerActions.UPDATE_CURRENT_TIME,
      updateVolumeLevel: PlayerActions.UPDATE_VOLUME_LEVEL,
      updateDuration: PlayerActions.UPDATE_DURATION,
      toggleRandom: PlayerActions.TOGGLE_RANDOM,
      toggleLoop: PlayerActions.TOGGLE_LOOP,
      toggleMute: PlayerActions.TOGGLE_MUTE,
      play: PlayerActions.PLAY,
      pause: PlayerActions.PAUSE,
      playNext: PlayerActions.PLAY_NEXT,
      playPrev: PlayerActions.PLAY_PREV,
      playSongAt: PlayerActions.PLAY_SONG_AT
    })
  }


/* Update handlers */
  updatePlaylist (playlist)  {
    this.playerIsLooped  = false
    this.playerIsRandom  = false

    this.playlist    = playlist
    this.prevSong    = this.playlist.get('songs').get(this.currentIndex - 1) || null
    this.currentSong = this.playlist.get('songs').get(this.currentIndex)     || null
    this.nextSong    = this.playlist.get('songs').get(this.currentIndex + 1) || null
  }

  updateCurrentTime (time)   { this.currentTime     = time   }
  updateVolumeLevel (volume) { this.volumeLevel     = volume }
  updateDuration    (time)   { this.currentDuration = time   }

  toggleRandom (newState) { this.playerIsRandom = newState }
  toggleLoop (newState)   { this.playerIsLooped = newState }
  toggleMute (newState)   { this.playerIsMuted  = newState }

/* Player manipulation methods */
  play ()  { this.playerIsPlaying = true  }
  pause () { this.playerIsPlaying = false }

  playNext () {
    this.currentIndex = this.currentIndex + 1

    this.prevSong    = this.playlist.get('songs').get(this.currentIndex - 1) || null
    this.currentSong = this.playlist.get('songs').get(this.currentIndex)     || null
    this.nextSong    = this.playlist.get('songs').get(this.currentIndex + 1) || null


    this.playerIsPlaying = true
  }

  playPrev () {
    this.currentIndex = this.currentIndex - 1

    this.prevSong    = this.playlist.get('songs').get(this.currentIndex - 1) || null
    this.currentSong = this.playlist.get('songs').get(this.currentIndex)     || null
    this.nextSong    = this.playlist.get('songs').get(this.currentIndex + 1) || null

    this.playerIsPlaying = true
  }

  playSongAt (args) {
    this.currentIndex = args.index

    this.prevSong    = this.playlist.get('songs').get(this.currentIndex - 1) || null
    this.currentSong = this.playlist.get('songs').get(this.currentIndex)     || null
    this.nextSong    = this.playlist.get('songs').get(this.currentIndex + 1) || null

    if (args.playing) { this.playerIsPlaying = true }
  }
}


export default alt.createStore(PlayerStore, 'PlayerStore')
