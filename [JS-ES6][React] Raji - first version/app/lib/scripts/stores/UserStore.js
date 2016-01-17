import Immutable from 'immutable'
import jwtDecode from 'jwt-decode'
import alt from '../utils/alt.js'
import UserActions from '../actions/UserActions.js'
import ApplicationActions from '../actions/ApplicationActions.js'

class UserStore {
  constructor () {
    this.token = localStorage.getItem('userToken') || null
    this.user  = this.token ? Immutable.fromJS(jwtDecode(this.token)) : null
    this.error = null

    this.bindListeners({
      updateUser: UserActions.UPDATE_USER,
      logoutUser: UserActions.LOGOUT_USER
    })
  }


  showError (error) {
    this.error = error
  }

  updateUser (userInfo) {
    this.error = null
    this.user = userInfo.get('user')
    this.token = userInfo.get('token')
    localStorage.setItem('userToken', this.token)
  }

  logoutUser () {
    this.error = null
    this.token = null
    this.user  = null

    localStorage.removeItem('userToken')
  }

}


export default alt.createStore(UserStore, 'UserStore')
