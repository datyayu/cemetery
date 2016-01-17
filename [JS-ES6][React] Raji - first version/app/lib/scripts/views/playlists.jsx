/* eslint-env browser */
import React from 'react'

import PlaylistActions from '../actions/PlaylistActions.js'
import PlaylistStore from '../stores/PlaylistStore.js'
import ApplicationActions from '../actions/ApplicationActions.js'

import PlaylistsListView from '../components/playlistsListView/index.jsx'


class Series extends React.Component {
  constructor () {
    super()
    this.state = PlaylistStore.getState()
  }

  render () {
    return (
      <div className="content">
        <PlaylistsListView playlists={this.state.playlistsList}/>
      </div>
    )
  }


  componentWillMount () {
    PlaylistActions.fetchPlaylistsList()
  }

  componentDidMount () {
    PlaylistStore.listen(this.onChange.bind(this))
    ApplicationActions.updateMenuActiveItem(3)
  }

  componentWillUnmount () {
    PlaylistStore.unlisten(this.onChange.bind(this))
  }

  onChange (state) {
    this.setState(state)
  }
}


export default Series
