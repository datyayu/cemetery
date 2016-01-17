import React  from 'react'
import {Link} from 'react-router'


class SidebarLogo extends React.Component {
  render () {
    return (
      <li className='Sidebar-item' onClick={this.props.onLogoClick}>
        <Link className='Sidebar-logo' to='/'>
          <img className='Sidebar-logo-image' src='/public/assets/img/logo.svg' />
          <p className='Sidebar-logo-text'> raji </p>
        </Link>
      </li>
    )
  }
}


export default SidebarLogo
