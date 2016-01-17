/* eslint-env browser */
import _ from 'lodash'
import Immutable from 'immutable'
import PlayerActions from '../actions/PlayerActions.js'
import DataFetcher from './DataFetcher.js'


let AudioAPIUtils = function (audioElementId) {
  this.player = document.getElementById(audioElementId)
  this.player.volume = 0.1

  // Player data.
  this.currentSong     = null
  this.playlist        = null
  this.backupSongs     = null
  this.index           = 0

  // Player State.
  this.playerIsLooped  = false
  this.playerIsRandom  = false
  this.playerIsPlaying = false
  this.playerIsMuted   = false


/* Event handlers */

  // Handle the end of a song.
  this.onSongEnded = () => {
    let playlistSize = this.playlist.get('songs').count()

    // Loop through the same song.
    if (this.playerIsLooped) {
      this.play()
    }
    // Keep playing the rest of the playlist.
    else if (this.index !== (playlistSize - 1)) {
      this.playNext()
    }
    //Stop Playing since it reached the playlist's end.
    else {
      this.playerIsPlaying = false
      PlayerActions.pause()
      PlayerActions.updateCurrentTime(0)
    }
  }

  // Handle the song time update.
  this.onTimeUpdate = () => {
    PlayerActions.updateCurrentTime(this.player.currentTime)
  }

  // Update the song duration when the browser gets it
  this.onLoadedMetadata = () => {
    PlayerActions.updateDuration(this.player.duration)
  }



/* Setters */
  // Set the current playlist to a given one.
  this.setPlaylist = (playlist) => {
    this.playlist        = playlist
    this.currentSong     = null
    this.backupSongs     = null
    this.index           = 0
    this.playerIsLooped  = false
    this.playerIsRandom  = false
    this.playerIsPlaying = false

    PlayerActions.updatePlaylist(this.playlist)
  }


  // Set the song time to a given one.
  this.setCurrentTime = (time) => {
    this.player.currentTime = time
    PlayerActions.updateCurrentTime(this.player.currentTime)
  }


  // Set the volume level to a given one.
  this.setVolumeLevel = (level) => {
    this.player.volume = level
    PlayerActions.updateVolumeLevel(this.player.volume)
  }


  // Toggle the player's loop state.
  this.toggleLoop = () => {
    this.playerIsLooped = !this.playerIsLooped
    PlayerActions.toggleLoop(this.playerIsLooped)
  }


  // Toggle the player's random state.
  this.toggleRandom = () => {
    this.playerIsRandom = !this.playerIsRandom
    this.shufflePlaylist.call(this)
    PlayerActions.toggleRandom(this.playerIsRandom)
  }


  // Toggle the player's mute state.
  this.toggleMute = () => {
    this.player.muted = !this.player.muted
    this.playerIsMuted = this.player.muted
    PlayerActions.toggleMute(this.playerIsMuted)
  }



/* Player manipulation methods */

  // Play if it's paused, otherwise paused it.
  this.play = () => {
    let songs = this.playlist.get('songs')

    // Make sure it has loaded the current song.
    if (!this.player.src) {
      this.currentSong = songs.get(this.index)
      this.reloadAudio.call(this)
    } else if (this.player.paused) {
      this.player.play()
      this.playerIsPlaying = true
      PlayerActions.play()
    } else {
      this.player.pause()
      this.playerIsPlaying = false
      PlayerActions.pause()
    }
  }


  // Force pause.
  this.pause = () => {
    this.player.pause()
    PlayerActions.pause()
  }


  // If there's a playlist loaded, play next song on playlist.
  this.playNext = () => {
    // Do nothing if there is no playlist loaded.
    if (!this.playlist) { return }

    let songs = this.playlist.get('songs')

    // If it isn't at the last song, then play next.
    if (this.index < (songs.count() - 1)) {
      this.currentSong = songs.get(++this.index)
      PlayerActions.playNext()
    }

    // If it's the last one, then play then loops and play the first one.
    else {
      this.index = 0
      this.currentSong = songs.get(0)
      PlayerActions.playSongAt(0, true)
    }

    this.reloadAudio.call(this)
  }


  // If theres' a playlist loaded. Play previous song on playlist.
  this.playPrev = () => {
    // Do nothing if there is no playlist loaded.
    if (!this.playlist) { return }


    let songs  = this.playlist.get('songs')

    // If it has been playing for more than 5s, just reset the current song.
    if (this.player.currentTime > 5) {
      this.player.currentTime = 0
      PlayerActions.updateCurrentTime(0)
    }

    // Go back one song (as long as it isn't the first one).
    else if ( this.index > 0 ) {
      this.currentSong = songs.get(--this.index)
      this.reloadAudio.call(this)
      PlayerActions.playPrev()
    }

    // If it's the first song in playlist and it hasn't been 3 seconds
    // since it started playing the current song, then go back to the
    // last song in playlist. (You know, like when you're fast skipping
    // every song trying to find one song at the end of the playlist.)
    else {
      this.index       = songs.count() - 1
      this.currentSong = songs.get(this.index)

      this.reloadAudio.call(this)
      PlayerActions.playSongAt(this.index, true)
    }
  }


  // Play the song at a given index in the current playlist.
  this.playSongAt = (index, forceReload) => {
    let songs = this.playlist.get('songs')

    // Play song only if it's between the playlist's bounds and
    // it isn't the current one.
    if (songs && index >= 0 && index < songs.count() && this.index !== index)
    {
      this.index = index
      this.currentSong = songs.get(index)
      this.reloadAudio.call(this)
      PlayerActions.playSongAt(index, true)
    }

    // If it's the same one, just play/pause it.
    else if (this.index === index) {
      if (forceReload === true) {
        this.currentSong = songs.get(index)
        this.reloadAudio.call(this)
      } else {
        this.play.call(this)
      }
    }

    // Otherwise just log a warning.
    else {
      console.warn('Requested index was off playlist\'s bounds. Action skipped.')
      console.warn('Btw, if you see this then you broke the app. Congrats!!, and don\'t forget to tell at aoitsu3@gmail.com how you did it :)')
    }
  }


  // Shuffle / Unshuffle current Playlist.
  this.shufflePlaylist = () => {
    let currentSongs = this.playlist.get('songs').toJS()
    let currentSong  = this.currentSong.toJS()

    // Change to Shuffle State.
    if (this.playerIsRandom) {
      let shuffledSongs = _.shuffle(currentSongs)
      this.backupSongs  = _.clone(currentSongs, true)
      this.index        = _.findIndex(shuffledSongs, currentSong)

      this.playlist = this.playlist.set('songs', Immutable.fromJS(shuffledSongs))
    }

    // Back to normal state.
    else {
      this.index    = _.findIndex(this.backupSongs, currentSong)
      this.playlist = this.playlist.set('songs', Immutable.fromJS(this.backupSongs))
    }

    // Notify the playlist change to the store.
    PlayerActions.updatePlaylist(this.playlist)
    // Update the index on the store.
    PlayerActions.playSongAt(this.index, false)
  }


  // Fetch playlist from db.
  this.fetchPlaylist = (playlistURL) => {
    DataFetcher
      .fetchPlaylist(playlistURL)
      .then((playlist) => { this.setPlaylist.call(this, playlist) })
      .catch()
  }



/* Utility methods */

  // Load the current song (which should be stored at this.currentSong).
  this.reloadAudio = () => {
    this.player.src = this.currentSong.get('url') // Make sure it has the right song.
    this.player.load()
    this.player.play()
    PlayerActions.play()
    this.playerIsPlaying = true
  }


  this.player.addEventListener('ended', this.onSongEnded.bind(this), false)
  this.player.addEventListener('timeupdate', this.onTimeUpdate.bind(this), false)
  this.player.addEventListener('loadedmetadata', this.onLoadedMetadata, false)

}


export default new AudioAPIUtils('player')
