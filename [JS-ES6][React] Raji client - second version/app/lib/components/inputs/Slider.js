import React, {PropTypes} from 'react';


const Slider = ({current, max}) =>
  <div className="Slider">
    <div className="Slider-total">
      <div className="Slider-current" style={{ width: `${(current / max) * 100 || 0}%` }}>
      </div>
    </div>
  </div>
;

Slider.propTypes = {
  current: PropTypes.number,
  max: PropTypes.number
};

Slider.defaultProps = {
  current: 0,
  max: 100
};


export default Slider;
