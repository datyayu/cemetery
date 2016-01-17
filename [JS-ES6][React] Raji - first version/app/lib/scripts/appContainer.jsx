import React from 'react'
import {RouteHandler} from 'react-router'

import ApplicationStore from './stores/ApplicationStore.js'
import ApplicationActions from './actions/ApplicationActions.js'

import Sidebar from './components/sidebar/index.jsx'


class App extends React.Component {
  constructor () {
    super()
    this.state = ApplicationStore.getState()
  }

  componentDidMount () {
    ApplicationStore.listen(this.onChange.bind(this))
  }

  componentWillUnmount () {
    ApplicationStore.unlisten(this.onChange.bind(this))
  }

  onChange (state) {
    this.setState(state)
  }

  render () {
    let menuActiveItem  = this.state.menuActiveItem
    let mobileShowClass = this.state.isMenuShowing ?
                            'move-right' :
                            this.state.isPlaylistShowing ? 'move-left' : ''
    let userLoginBlocker = this.state.isLoginShowing ? 'show' : ''

    return (
      <div className={`container ${mobileShowClass}`}>
        <Sidebar onItemClick={ApplicationActions.hideMenu}
                 activeItem={menuActiveItem}
                 onUserClick={ApplicationActions.toggleUserLogin}
                 showLoginForm={this.state.isLoginShowing}
                 onBlockerClick={ApplicationActions.hideAll}
                 signError={this.state.signError}/>
        <RouteHandler />
        <div className={`Content-blocker ${userLoginBlocker}`}
             onClick={ApplicationActions.hideAll} />
      </div>
    )
  }
}


export default App
