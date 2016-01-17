/* eslint-env browser */
import React from 'react'

import ApplicationActions from '../../actions/ApplicationActions.js'


class Header extends React.Component {
  render () {
    let playlistIcon = null
    if (this.props.includePlaylist) {
      playlistIcon = <i className='fa fa-arrow-left Header-playlistIcon'
                        onClick={ApplicationActions.togglePlaylistShowing} />
    }

    return (
      <div className='Header'>
        <i className='fa fa-navicon Header-menuIcon'
           onClick={ApplicationActions.toggleMenuShowing} />
        <h1 className='Header-title'> {this.props.title} </h1>
         { playlistIcon }
      </div>
    )
  }
}


export default Header
