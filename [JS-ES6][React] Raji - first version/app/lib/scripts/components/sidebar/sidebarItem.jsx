/* eslint-env browser */
import React  from 'react'
import {Link} from 'react-router'


class SidebarItem extends React.Component {
  render () {
    let icon = this.props.item.icon
    let link = this.props.item.link
    let text = this.props.item.text
    let onClick = this.props.onItemClick
    let activeClass = this.props.isActive ? 'is-active' : ''

    return (
        <li className={`Sidebar-item ${ activeClass }`} onClick={ onClick }>
          <Link to={ link } className='Sidebar-link'>
              <i className={`fa fa-${ icon } Sidebar-icon`}></i>
              <p className='Sidebar-text'> { text } </p>
            </Link>
        </li>
    )
  }
}


export default SidebarItem
