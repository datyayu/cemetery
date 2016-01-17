import alt from '../utils/alt.js'
import DataFetcher from '../utils/DataFetcher.js'


class PlaylistActions {
  fetchPlaylist (query) {
    this.dispatch()

    DataFetcher
      .fetchPlaylist(query)
      .then((playlist) => { this.actions.updatePlaylist(playlist) })
  }

  fetchPlaylistsList (query) {
    this.dispatch()

    DataFetcher
      .fetchPlaylistsList(query)
      .then((playlistsList) => { this.actions.updatePlaylistsList(playlistsList) })
  }


  updatePlaylistsList (playlistsList) {
    this.dispatch(playlistsList)
  }

  updatePlaylist (playlist) {
    this.dispatch(playlist)
  }

}


export default alt.createActions(PlaylistActions)
