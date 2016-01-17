/* eslint-env browser */
import React from 'react'

import PlayerStore from '../stores/PlayerStore.js'
import AudioAPIUtils from '../utils/AudioAPIUtils.js'
import ApplicationActions from '../actions/ApplicationActions.js'

import PlayerView from '../components/playerView/index.jsx'
import Playlist from '../components/playlist/index.jsx'


class Player extends React.Component {
  constructor () {
    super()
    this.state = PlayerStore.getState()
  }

  render () {
    let currentSongId = this.state.currentSong ? this.state.currentSong.get('id') : null

    return (
      <div className="content">
        <PlayerView song={this.state.currentSong}
                    current={this.state.currentTime}
                    max={this.state.currentDuration}
                    isPlaying={this.state.playerIsPlaying}
                    isRandom={this.state.playerIsRandom}
                    isMuted={this.state.playerIsMuted}
                    onSliderClick={AudioAPIUtils.setCurrentTime} />

        <Playlist playlist={this.state.playlist}
                  currentSongId={currentSongId}
                  showInfo={true}
                  isPlaying={this.state.playerIsPlaying}
                  onSongClick={this.handleSongClick} />
      </div>
    )
  }

  componentWillMount () {
    if (!this.state.playlist) {
      AudioAPIUtils.fetchPlaylist('iguigu.json')
    }
  }

  componentDidMount () {
    PlayerStore.listen(this.onChange.bind(this))
    ApplicationActions.updateMenuActiveItem(0)
  }

  componentWillUnmount () {
    PlayerStore.unlisten(this.onChange.bind(this))
  }

  handleSongClick (index) {
    AudioAPIUtils.playSongAt(index)
    ApplicationActions.hidePlaylist()
  }

  onChange (state) {
    this.setState(state)
  }
}


export default Player
