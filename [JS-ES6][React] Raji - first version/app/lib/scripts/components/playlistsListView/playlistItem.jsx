/* eslint-env browser */
import React            from 'react'
import {Link}           from 'react-router'
import PlaylistInfo     from './playlistInfo.jsx'
import PlaylistTopSongs from './playlistTopSongs.jsx'


class PlaylistItem extends React.Component {
  render () {
    let playlist = this.props.playlist
    let topSongs = playlist.get('topSongs')
    let info     = playlist.get('info')
    let id       = info.get('id')

    return (
      <Link to={`/playlists/${id}`}>
        <li className='PlaylistItem'>
          <PlaylistInfo playlistInfo={info} />
          <PlaylistTopSongs songs={topSongs} />
        </li>
      </Link>
    )
  }
}


export default PlaylistItem
