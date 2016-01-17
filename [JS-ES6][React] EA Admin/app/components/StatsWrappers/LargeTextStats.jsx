import React, {PropTypes} from 'react';


const LargeTextStats = ({ value, name }) =>
  <div className="StatsWrapper">
    <div className="StatsWrapper-value">
      <h2 className="StatsWrapper-largeText"> {value} </h2>
    </div>
    <h3 className="StatsWrapper-name"> {name} </h3>
  </div>
;

LargeTextStats.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};


export default LargeTextStats;
