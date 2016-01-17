import Immutable from 'immutable'
import alt from '../utils/alt.js'
import PlaylistActions from '../actions/PlaylistActions.js'


class PlaylistStore {
  constructor () {
    this.playlistsList = null
    this.playlist      = null

    this.bindListeners({
      fetchPlaylist: PlaylistActions.FETCH_PLAYLIST,
      fetchPlaylistsList: PlaylistActions.FETCH_PLAYLISTS_LIST,
      updatePlaylist: PlaylistActions.UPDATE_PLAYLIST,
      updatePlaylistsList: PlaylistActions.UPDATE_PLAYLISTS_LIST
    })
  }

  fetchPlaylist ()      {
     if (this.playlist !== null) { this.playlist.clear() }
   }
  fetchPlaylistsList () {
    if (this.playlistsList !== null) { this.playlistsList.clear() }
  }

  updatePlaylist (playlist)  { this.playlist      = playlist }
  updatePlaylistsList (list) { this.playlistsList = list }
}


export default alt.createStore(PlaylistStore, 'PlaylistStore')
