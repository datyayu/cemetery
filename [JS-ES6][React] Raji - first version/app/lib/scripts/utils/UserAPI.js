import immutable from 'immutable'
import request from 'axios'
import UserActions from '../actions/UserActions.js'
import ApplicationActions from '../actions/ApplicationActions.js'

const url = 'http://localhost:3000/api/users'

class UserAPI {
  login (userData) {
    request.post(`${url}/login`, userData)
      .then(response => {
        let userInfo = immutable.fromJS(response.data)

        UserActions.updateUser(userInfo)
        ApplicationActions.hideAll()
      })
      .catch(error => {
        let errorMessage = error.data.error
        ApplicationActions.showSignError(errorMessage)
      })
  }

  signup (userData) {
    request.post(`${url}`, userData)
      .then(response => {
        let userInfo = immutable.fromJS(response.data)

        UserActions.updateUser(userInfo)
        ApplicationActions.hideAll()
      })
      .catch(error => {
        let errorMessage = error.data.error
        ApplicationActions.showSignError(errorMessage)
      })
  }
}


export default new UserAPI()
