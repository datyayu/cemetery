import alt from '../utils/alt.js'
import ApplicationActions from '../actions/ApplicationActions.js'


class ApplicationStore {
  constructor () {
    this.isMenuShowing     = false
    this.isPlaylistShowing = false
    this.isLoginShowing    = false
    this.signError         = null
    this.menuActiveItem    = 0

    this.bindListeners({
      togglePlaylistShowing : ApplicationActions.TOGGLE_PLAYLIST_SHOWING,
      toggleMenuShowing     : ApplicationActions.TOGGLE_MENU_SHOWING,
      toggleUserLogin       : ApplicationActions.TOGGLE_USER_LOGIN,
      hidePlaylist          : ApplicationActions.HIDE_PLAYLIST,
      hideMenu              : ApplicationActions.HIDE_MENU,
      hideAll               : ApplicationActions.HIDE_ALL,

      showSignError: ApplicationActions.SHOW_SIGN_ERROR,
      updateMenuActiveItem: ApplicationActions.UPDATE_MENU_ACTIVE_ITEM
    })
  }

  togglePlaylistShowing () { this.isPlaylistShowing = !this.isPlaylistShowing }
  toggleMenuShowing () { this.isMenuShowing = !this.isMenuShowing }
  toggleUserLogin () {
    let temp = !this.isLoginShowing // HideAll resets all state so this is saved before calling it.
    this.hideAll()
    this.isLoginShowing = temp
  }

  hidePlaylist () { this.isPlaylistShowing = false }
  hideMenu ()     { this.isMenuShowing     = false }
  hideAll () {
    this.isPlaylistShowing = false
    this.isMenuShowing     = false
    this.isLoginShowing    = false
    this.signError         = null
  }

  showSignError (error) {
    this.signError = error
  }

  updateMenuActiveItem (itemIndex) {
    this.menuActiveItem = itemIndex
    this.isMenuShowing  = false
  }
}


export default alt.createStore(ApplicationStore, 'ApplicationStore')
