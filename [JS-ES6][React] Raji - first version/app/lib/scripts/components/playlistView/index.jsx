/* eslint-env browser */
import React from 'react'
import Header from '../header/index.jsx'
import PlaylistInfo from './playlistInfo.jsx'


class PlaylistView extends React.Component {
  render () {
    let playlistInfo = this.props.playlistInfo

    if (playlistInfo === null) {
      return (
        <div className="Release">
          <Header title="Loading" search={false} />
          <img src="/public/assets/img/spinner.gif" />
        </div>
      )
    }


    let title = playlistInfo.get('title')

    return (
      <div className="Release">
        <Header title={title} includePlaylist={true} />
        <PlaylistInfo playlist={playlistInfo} />
      </div>
    )
  }
}


export default PlaylistView
