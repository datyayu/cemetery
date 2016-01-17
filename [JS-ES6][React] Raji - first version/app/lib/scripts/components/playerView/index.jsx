/* eslint-env browser */
import React       from 'react'
import Header      from '../header/index.jsx'
import SongInfo    from './songInfo.jsx'
import Controls    from './controls.jsx'
import ProgressBar from './progressBar.jsx'


class PlayerView extends React.Component {
  render () {
    let song = this.props.song

    if (!song) {
      return (
        <div className="Player">
          <Header title="Now Playing" search={false} />
          <img src="/public/assets/img/spinner.gif" />
        </div>
      )
    }


    let onSliderClick = this.props.onSliderClick
    let currentTime   = this.props.current
    let maxTime       = this.props.max
    let isPlaying     = this.props.isPlaying
    let isRandom      = this.props.isRandom
    let isMuted       = this.props.isMuted

    let artist = song.get('artist')
    let title  = song.get('title')
    let image  = song.get('image')
    let album  = song.get('album')

    return (
      <div className="Player">
        <Header title="Now Playing" includePlaylist={true} />
        <SongInfo image={image} title={title} artist={artist} album={album} />
        <ProgressBar current={currentTime} max={maxTime} onSliderClick={onSliderClick} />
        <Controls isPlaying={isPlaying} isRandom={isRandom} isMuted={isMuted}/>
      </div>
    )
  }
}


export default PlayerView
