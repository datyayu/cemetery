/* eslint-env browser */
import React from 'react'


class PlaylistInfo extends React.Component {
  render () {
    let playlist    = this.props.playlist
    let image       = playlist.get('image')
    let title       = playlist.get('title')
    let songCount   = playlist.get('songsCount')
    let author      = playlist.get('author')
    let releaseDate = playlist.get('date')

    return (
      <div className='Release-content'>
        <img className='Release-image' src={image} />
        <div className='Release-info'>
          <p className='Release-text Release-text--title'>{title}</p>
          <p className='Release-text'> {songCount} songs </p>
          <p className='Release-text'> by {author} </p>
          <p className='Release-text'> Released on {releaseDate} </p>
        </div>
      </div>
    )
  }
}


export default PlaylistInfo
