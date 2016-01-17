/* eslint-env browser */
import React from 'react'

import PlaylistStore from '../stores/PlaylistStore.js'
import PlaylistActions from '../actions/PlaylistActions.js'
import PlayerStore from '../stores/PlayerStore.js'
import AudioAPIUtils from '../utils/AudioAPIUtils.js'
import ApplicationActions from '../actions/ApplicationActions.js'

import PlaylistView from '../components/playlistView/index.jsx'
import Playlist from '../components/playlist/index.jsx'


class Release extends React.Component {
  constructor (props) {
    super(props)
    this.playerState = PlayerStore.getState()
    this.state = PlaylistStore.getState()
  }


  render () {
    let playlist = this.state.playlist
    let info = playlist ? playlist.get('info') : null

    let isPlaying    = this.playerState.playerIsPlaying
    let currentSong  = this.playerState.currentSong
    let currentSongId = currentSong ? currentSong.get('id') : null

    return (
      <div className="content">
        <PlaylistView playlistInfo={info} />
        <Playlist playlist={playlist}
                  showInfo={false}
                  currentSongId={currentSongId}
                  isPlaying={isPlaying}
                  onSongClick={this.onSongClick.bind(this)} />
      </div>
    )
  }


  componentWillMount () {
    let releaseId  = this.props.params.releaseId
    let playlistId = this.props.params.playlistId
    let query      = null

    if (playlistId) {
      query = `playlists/${playlistId}.json`
    } else {
      query = `albums/${releaseId}.json`
    }

    PlaylistActions.fetchPlaylist(query)
  }


  componentDidMount () {
    PlaylistStore.listen(this.onPlaylistChange.bind(this))
    PlayerStore.listen(this.onPlayerChange.bind(this))
    ApplicationActions.updateMenuActiveItem(-1)
    ApplicationActions.togglePlaylistShowing()
  }


  componentWillUnmount () {
    PlaylistStore.unlisten(this.onPlaylistChange.bind(this))
    PlayerStore.unlisten(this.onPlayerChange.bind(this))
  }


  onPlaylistChange (state) {
    this.setState(state)
  }

  onPlayerChange (state) {
    this.playerState = state
    this.forceUpdate()
  }


  onSongClick (index) {
    location.hash = 'player'
    AudioAPIUtils.pause()
    AudioAPIUtils.setPlaylist(this.state.playlist)
    AudioAPIUtils.playSongAt(index, true)
    ApplicationActions.hidePlaylist()
  }
}


export default Release
