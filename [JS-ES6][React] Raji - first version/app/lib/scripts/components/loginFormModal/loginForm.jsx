/*eslint-env browser*/
import React from 'react'


class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { password: '', username: '' }
  }

  onUsernameChange (event) { this.setState({ username: event.target.value }) }
  onPasswordChange (event) { this.setState({ password: event.target.value }) }

  onLogin () { this.props.onFormSubmit(this.state) }

  render () {
    return (
      <form className='signForm-inputContainer' onSubmit={this.onLogin.bind(this)} >
        <h2 className='signForm-title'> Log in </h2>
         <input type='text'
                placeholder='user'
                className='signForm-input'
                value={this.state.username}
                onChange={this.onUsernameChange.bind(this)} />
         <input type='password'
                className='signForm-input'
                placeholder='password'
                value={this.state.password}
                onChange={this.onPasswordChange.bind(this)} />
        <button type='submit' className='signForm-submitButton'> Log in </button>
      </form>
    )
  }
}


export default LoginForm
