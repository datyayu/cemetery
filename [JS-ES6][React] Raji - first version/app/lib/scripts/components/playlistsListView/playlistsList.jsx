/* eslint-env browser */
import React from 'react'
import PlaylistItem from './playlistItem.jsx'


class PlaylistList extends React.Component {
  render () {
    let playlistsListNodes = this.props.playlists.map((playlist, idx) => {
      return <PlaylistItem key={idx} playlist={playlist} />
    })

    return (
      <ul className='PlaylistsList-list'>
        {playlistsListNodes}
      </ul>
    )
  }
}


export default PlaylistList
