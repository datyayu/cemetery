/*eslint-env browser*/
import React from 'react'


class SignupForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { password: '', username: '', email: '' }
  }

  onEmailChange (event) {
    this.setState({ email: event.target.value })
  }
  onUsernameChange (event) {
    this.setState({ username: event.target.value })
  }

  onPasswordChange (event) {
    this.setState({ password: event.target.value })
  }

  onSignup (event) {
    event.preventDefault()
    this.props.onFormSubmit(this.state)
  }

  render (x) {
    return (
      <form className='signForm-inputContainer' onSubmit={this.onSignup.bind(this)}>
        <h2 className='signForm-title'> Sign up </h2>
        <input type='email'
               placeholder='email'
               className='signForm-input'
               value={this.state.email}
               onChange={this.onEmailChange.bind(this)} />
        <input type='text'
               placeholder='username'
               className='signForm-input'
               value={this.state.username}
               onChange={this.onUsernameChange.bind(this)} />
        <input type='password'
              className='signForm-input'
              placeholder='password'
              value={this.state.password}
              onChange={this.onPasswordChange.bind(this)} />
        <button type='submit' className='signForm-submitButton'> Sign up </button>
      </form>
    )
  }
}


export default SignupForm
