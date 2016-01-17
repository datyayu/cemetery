import React from 'react'


class PlaylistTitle extends React.Component {
  render () {
    if (this.props.showInfo) {
      return <p className='Playlist-title'> Current playlist </p>
    }

    return <p className='Playlist-title'> Songs in this Playlist </p>
  }
}

PlaylistTitle.propTypes = { showInfo: React.PropTypes.bool }
PlaylistTitle.defaultProps = { showInfo: true }


export default PlaylistTitle
