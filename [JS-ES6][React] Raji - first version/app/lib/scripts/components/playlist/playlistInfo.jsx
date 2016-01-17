/* eslint-env browser */
import React from 'react'


class PlaylistInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = { show: true }
  }

  render () {
    let playlistInfo = this.props.info

    if (!playlistInfo) {
      return <img src='/public/assets/img/spinner_dark.gif'/>
    }

    if (!this.state.show) {
      return (
        <div className='Playlist-info' onClick={this.handleClick.bind(this)}>
          <div className='Playlist-infoText'>
            <p className='Playlist-text'> + Show Info </p>
          </div>
        </div>
      )
    }


    let image  = playlistInfo.get('image')
    let title  = playlistInfo.get('title')
    let author = playlistInfo.get('author')

    return (
      <div className='Playlist-info is-active' onClick={this.handleClick.bind(this)}>
        <img className='Playlist-infoImage' src={image} />
        <div className='Playlist-infoText'>
          <p className='Playlist-text'> {title} </p>
          <p className='Playlist-text'> by {author} </p>
        </div>
      </div>
    )
  }

  handleClick (event) {
    event.stopPropagation()
    this.setState({ show: !this.state.show})
  }
}


export default PlaylistInfo
