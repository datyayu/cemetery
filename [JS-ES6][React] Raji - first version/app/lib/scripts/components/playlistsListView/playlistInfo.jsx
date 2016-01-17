/* eslint-env browser */
import React from 'react'


class PlaylistInfo extends React.Component {
  render () {
    let playlist  = this.props.playlistInfo
    let image     = playlist.get('image')
    let title     = playlist.get('title')
    let author    = playlist.get('author')
    let songCount = playlist.get('songCount')
    let playCount = playlist.get('playCount')

    return (
      <div className='PlaylistItem-info'>
        <img className='PlaylistItem-info-image' src={image}/>
        <div className='PlaylistItem-info-main'>
          <p className='PlaylistItem-info-text PlaylistItem-info-text--title'>
            {title}
          </p>
          <p className='PlaylistItem-info-text'> by {author} </p>
          <p className='PlaylistItem-info-text'> {songCount} songs </p>
          <p className='PlaylistItem-info-text'> {playCount} plays </p>
        </div>
      </div>
    )
  }
}

PlaylistInfo.proptypes = {
  playlist: React.PropTypes.shape({
    img: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    songNumber: React.PropTypes.number,
    playCounter: React.PropTypes.number
  }).isRequired
}


export default PlaylistInfo
