import alt from '../utils/alt.js'


class ApplicationActions {
  togglePlaylistShowing () { this.dispatch() }
  toggleMenuShowing ()     { this.dispatch() }
  toggleUserLogin ()       { this.dispatch() }

  hidePlaylist () { this.dispatch() }
  hideMenu ()     { this.dispatch() }
  hideAll ()      { this.dispatch() }

  showSignError (error) { this.dispatch(error) }
  updateMenuActiveItem (itemIndex) { this.dispatch(itemIndex) }
}


export default alt.createActions(ApplicationActions)
