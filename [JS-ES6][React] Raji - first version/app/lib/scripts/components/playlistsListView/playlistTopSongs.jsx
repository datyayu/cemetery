/* eslint-env browser */
import React from 'react'


class PlaylistTopSongs extends React.Component {
  render () {
    let songsNodes = this.props.songs.map((song, idx) => {
      return <li key={idx} className='PlaylistItem-top-item'> {song} </li>
    })


    return (
      <div className='PlaylistItem-top u-desktopOnly'>
        <h2 className='PlaylistItem-top-title'> Top Songs </h2>
        <ul className='PlaylistItem-top-list u-textCenter'>
          {songsNodes}
        </ul>
      </div>
    )
  }
}


export default PlaylistTopSongs
