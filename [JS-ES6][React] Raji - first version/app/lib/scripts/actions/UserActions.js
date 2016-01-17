import alt from '../utils/alt.js'
import UserAPI from '../utils/UserAPI.js'


class UserActions {
  singupUser (userData) { UserAPI.signup(userData) }
  loginUser  (userData) { UserAPI.login(userData)  }

  updateUser (userInfo) { this.dispatch(userInfo) }
  logoutUser ()         { this.dispatch() }
}


export default alt.createActions(UserActions)
