/* eslint-env browser */
import React from 'react'
import Header from '../header/index.jsx'
import PlaylistsList from './playlistsList.jsx'


class PlaylistsListView extends React.Component {
  render () {
    let playlists = this.props.playlists

    if (playlists === null) {
      return (
        <div className='PlaylistsList'>
          <Header title='Playlists' search={false} />
          <img src='/public/assets/img/spinner.gif' />
        </div>
      )
    }

    return (
      <div className='PlaylistsList'>
        <Header title='Playlists' includePlaylist={false} />
        <PlaylistsList playlists={playlists} />
      </div>
    )
  }
}


export default PlaylistsListView
