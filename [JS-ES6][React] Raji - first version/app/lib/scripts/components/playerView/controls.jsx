/* eslint-env browser */
import React from 'react'
import AudioAPIUtils from '../../utils/AudioAPIUtils.js'
window.AudioAPIUtils = AudioAPIUtils

class Controls extends React.Component {
  render () {
    let isPlayingIcon = this.props.isPlaying ? 'pause is-active' : 'play'
    let isRandomStyle = this.props.isRandom ? 'is-active' : ''

    return (
      <div className='Player-controls'>
        <i className={`Player-icon fa fa-random ${isRandomStyle}`}
           onClick={AudioAPIUtils.toggleRandom}></i>
        <i className='Player-icon fa fa-fast-backward'
           onClick={AudioAPIUtils.playPrev}></i>
        <i className={`Player-icon fa fa-${isPlayingIcon}`}
           onClick={AudioAPIUtils.play}></i>
        <i className='Player-icon fa fa-fast-forward'
           onClick={AudioAPIUtils.playNext}></i>
        <i className='Player-icon fa fa-volume-down'
           onClick={AudioAPIUtils.toggleMute}></i>
      </div>
    )
  }
}


export default Controls
