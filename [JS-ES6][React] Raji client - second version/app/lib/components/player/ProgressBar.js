import React, {PropTypes} from 'react';
import Slider from '../inputs/Slider';
import {parseTime} from '../../utils/parsers';


const ProgressBar = ({currentTime, maxTime}) =>
  <div className="Player-progress">
    <Slider current={currentTime} max={maxTime} />

    <div className="Player-progressTime">
      <span className="Player-progressTime--min"> {parseTime(currentTime)} </span>
      <span className="Player-progressTime--max"> {parseTime(maxTime)} </span>
    </div>
  </div>
;


ProgressBar.propTypes = {
  currentTime: PropTypes.number.isRequired,
  maxTime: PropTypes.number.isRequired
};


export default ProgressBar;
