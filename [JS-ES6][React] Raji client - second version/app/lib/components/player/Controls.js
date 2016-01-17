import React, {PropTypes} from 'react';


const Controls = ({isPlaying=false, isRandom=false, isMuted=false}) =>
  <div className="Player-controls">
    <i className={`Player-icon fa fa-random ${isRandom ? 'is-active' : ''}`}></i>
    <i className="Player-icon fa fa-fast-backward"></i>
    <i className={`Player-icon fa fa-${isPlaying ? 'pause is-active' : 'play'}`}></i>
    <i className="Player-icon fa fa-fast-forward"></i>
    <i className="Player-icon fa fa-volume-down"></i>
  </div>
;


Controls.propTypes = {
  isMuted: PropTypes.bool,
  isPlaying: PropTypes.bool,
  isRandom: PropTypes.bool
};


export default Controls;
