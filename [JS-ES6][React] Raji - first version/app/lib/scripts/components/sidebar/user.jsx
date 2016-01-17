/* eslint-env browser */
import React from 'react'
import UserStore from '../../stores/UserStore.js'
import UserActions from '../../actions/UserActions.js'

class User extends React.Component {
  constructor () {
    super()
    this.state = UserStore.getState()
  }

  render () {
    let onClickHandler = !this.state.token ? this.props.onUserClick : UserActions.logoutUser

    if (!this.state.user) {
      return (
        <div>
          <p className='Sidebar-userName' onClick={this.props.onUserClick}> Log In </p>
        </div>
      )
    }

    return (
      <div className='Sidebar-user' onClick={ onClickHandler }>
        <img className='Sidebar-userImage' src={ this.state.user.get('avatar') } />
        <p className='Sidebar-userName'> Logout </p>
      </div>
    )
  }

  componentDidMount () {
    UserStore.listen(this.onChange.bind(this))
  }

  componentWillUnmount () {
    UserStore.unlisten(this.onChange.bind(this))
  }

  onChange (state) {
    this.setState(state)
  }
}


export default User
