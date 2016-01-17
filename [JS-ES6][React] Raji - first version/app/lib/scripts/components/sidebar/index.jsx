/* eslint-env browser */
import React       from 'react'
import SidebarItem from './sidebarItem.jsx'
import SidebarUser from './user.jsx'
import SidebarLogo from './sidebarLogo.jsx'
import LoginForm   from '../loginFormModal/index.jsx'

class Sidebar extends React.Component {
  render () {
    let items   = [
      {text: 'NOW PLAYING', icon: 'play', link: '/player'},
      {text: 'SERIES', icon: 'desktop', link: '/series'},
      {text: 'SEASONS', icon: 'calendar', link: '/seasons'},
      {text: 'PLAYLISTS', icon: 'th-list', link: '/playlists'}
    ]

    let onClick = this.props.onItemClick

    let itemNodes = items.map((item, idx) => {
      let isActive = this.props.activeItem === idx
      return <SidebarItem key={idx} item={item} isActive={isActive} onItemClick={onClick} />
    })


    return (
      <div className='Sidebar'>
        <ul className='Sidebar-list'>
          <SidebarLogo onLogoClick={onClick} />
          { itemNodes }
        </ul>

        <SidebarUser onUserClick={this.props.onUserClick} />
        <LoginForm showLoginForm={this.props.showLoginForm}
                   onBlockerClick={this.props.onBlockerClick}
                   signError={this.props.signError} />
      </div>
    )
  }
}


export default Sidebar
