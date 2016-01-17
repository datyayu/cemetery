import React from 'react'
import Song from './song.jsx'
import PlaylistTitle from './playlistTitle.jsx'
import PlaylistInfo from './playlistInfo.jsx'


class Playlist extends React.Component {
  render () {
    let playlist = this.props.playlist

    if (playlist === null) {
      return (
        <div className='Playlist'>
          <PlaylistTitle showInfo={showInfo} />
          <img src="/public/assets/img/spinner_dark.gif" />
        </div>
      )
    }


    let showInfo    = this.props.showInfo
    let isPlaying   = this.props.isPlaying
    let currentId   = this.props.currentSongId
    let onSongClick = this.props.onSongClick

    let info = playlist.get('info')

    let songNodes = playlist.get('songs').map((song, index) => {
      let id = song.get('id')

      return (
        <Song key={id}
              info={song}
              isPlaying={isPlaying}
              currentSongId={currentId}
              onSongClick={onSongClick.bind(null, index)} />
      )
    })

    return (
      <div className='Playlist'>
        <PlaylistTitle showInfo={showInfo} />

        { showInfo ? <PlaylistInfo info={info} /> : null }

        <ul className='Playlist-songList'> {songNodes} </ul>
      </div>
    )
  }
}

Playlist.propTypes = {
  showInfo: React.PropTypes.bool,
  currentSongId: React.PropTypes.string,
  playlist: React.PropTypes.shape({
    info: React.PropTypes.object,
    songs: React.PropTypes.arrayOf(React.PropTypes.object)
  })
}

Playlist.defaultProps = { showInfo: true }



export default Playlist
