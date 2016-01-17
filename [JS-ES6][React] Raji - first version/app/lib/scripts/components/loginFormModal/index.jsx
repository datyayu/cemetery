/*eslint-env browser*/
import React       from 'react'
import LoginForm   from './loginForm.jsx'
import SignupForm  from './signupForm.jsx'
import UserActions from '../../actions/UserActions.js'


class SignForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { showLogin: true }
  }

  onFormClick (event) {
    event.stopPropagation()
  }

  changeForm () {
    this.setState({ showLogin: !this.state.showLogin })
  }

  render () {
    if (!this.props.showLoginForm) { return null }

    let showForm = this.state.showLogin ?
      <LoginForm onFormSubmit={UserActions.loginUser} /> :
      <SignupForm onFormSubmit={UserActions.singupUser} />
    let showText = this.state.showLogin ? 'Are you new over here? ' : 'Already got an account? '
    let showLink = this.state.showLogin ? 'Sign up!' : 'Log in!'

    return (
      <div className='signFormModal' onClick={this.props.onBlockerClick}>
        <div className='signForm' onClick={this.onFormClick}>
          <span className='signForm-error'> { this.props.signError } </span>
          { showForm }
          <span className='signForm-text'>
            { showText }
            <span className='signForm-textLink' onClick={this.changeForm.bind(this)}>
              { showLink }
            </span>
          </span>
        </div>
      </div>
    )
  }
}


export default SignForm
