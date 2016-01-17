/* eslint-env browser */
import React from 'react'
import Slider from './slider.jsx'
import PlayerFetcher from '../../utils/DataFetcher.js'


class ProgressBar extends React.Component {
  render () {
    let onSliderClick = this.props.onSliderClick
    let max           = this.props.max
    let current       = this.props.current

    let currentTime = PlayerFetcher.parseTime(current)
    let maxTime     = max === 0 ? 'Click play to listen' : PlayerFetcher.parseTime(max)

    return (
      <div className="Player-progress">
        <Slider current={current} max={max} onSliderClick={onSliderClick} />

        <div className="Player-progressTime">
          <span className="Player-progressTime--min"> {currentTime} </span>
          <span className="Player-progressTime--max"> {maxTime} </span>
        </div>
      </div>
    )
  }
}


export default ProgressBar
