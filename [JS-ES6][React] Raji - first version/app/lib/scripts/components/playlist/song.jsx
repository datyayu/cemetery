/* eslint-env browser */
import React from 'react'


class Song extends React.Component {
  render () {
    let isPlaying     = this.props.isPlaying
    let currentSongId = this.props.currentSongId
    let onSongClick   = this.props.onSongClick
    let song          = this.props.info

    let id     = song.get('id')
    let image  = song.get('image')
    let title  = song.get('title')
    let artist = song.get('artist')

    let iconClass = 'play'
    let activeClass = ''


    if (isPlaying && currentSongId === id) {
      iconClass = 'pause'
      activeClass = 'is-playing'
    }

    return (
      <li className={`Song ${activeClass}`} onClick={onSongClick} >
        <div className='Song-info'>
          <img className='Song-image' src={image} />

          <div className='Song-desc'>
            <p className='Song-text'> {title} </p>
            <p className='Song-text'> {artist} </p>
          </div>

          <div className='Song-icons'>
            <i className={`fa fa-${iconClass} Song-icon`}></i>
            <i className='fa fa-heart Song-icon'></i>
            <i className='fa fa-plus Song-icon'></i>
          </div>
        </div>
      </li>
    )
  }
}


export default Song
