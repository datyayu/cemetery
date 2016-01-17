import React, {PropTypes} from 'react';
import DoughnutChart from '../Charts/DoughnutChart';


const DoughnutStats = ({ chartData, name }) =>
  <div className="StatsWrapper">
    <div className="StatsWrapper-value">
      <DoughnutChart data={chartData} />
    </div>
    <h3 className="StatsWrapper-name"> {name} </h3>
  </div>
;

DoughnutStats.propTypes = {
  chartData: PropTypes.array.isRequired,
};


export default DoughnutStats;
