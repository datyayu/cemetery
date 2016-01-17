import alt from '../utils/alt.js'


class PlayerActions {
/* Update Methods */
  updatePlaylist (playlist)  { this.dispatch(playlist) }
  updateCurrentTime (time)   { this.dispatch(time) }
  updateVolumeLevel (volume) { this.dispatch(volume) }
  updateDuration (duration)  { this.dispatch(duration) }

  toggleLoop (state)   { this.dispatch(state) }
  toggleRandom (state) { this.dispatch(state) }
  toggleMute (state)   { this.dispatch(state) }

/* Player manipulation methods */
  play ()     { this.dispatch() }
  pause ()    { this.dispatch() }
  playNext () { this.dispatch() }
  playPrev () { this.dispatch() }
  playSongAt (index, playing) { this.dispatch({index: index, playing: playing}) }
}


export default alt.createActions(PlayerActions)
