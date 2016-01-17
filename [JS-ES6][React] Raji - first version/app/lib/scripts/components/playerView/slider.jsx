/* eslint-env browser */
import React from 'react'


class ProgressBar extends React.Component {
  render () {
    let sliderProgress = (this.props.current / this.props.max) * 100 || 0
    let widthStyle = {width: `${sliderProgress}%`}

    return (
      <div className="Slider">
        <div className="Slider-total"
             onClick={this.handleClickOnTotal.bind(this)}>
          <div className="Slider-current"
               style={widthStyle}
               onClick={this.handleClickOnCurrent.bind(this)}></div>
        </div>
      </div>
    )
  }

  handleClickOnTotal (event) {
    event.stopPropagation()

    let sliderTotalElement = event.target
    let newTime = this.props.max * this.getClickPercent(event, sliderTotalElement)

    this.props.onSliderClick(newTime)
  }

  handleClickOnCurrent (event) {
    event.stopPropagation()

    let sliderTotalElement = event.target.parentElement
    let newTime = this.props.max * this.getClickPercent(event, sliderTotalElement)

    this.props.onSliderClick(newTime)
  }

  getClickPercent (event, sliderTotalElement) {
    return (event.clientX - sliderTotalElement.offsetLeft) / sliderTotalElement.offsetWidth
  }
}

ProgressBar.propTypes = { progress: React.PropTypes.number }


export default ProgressBar
