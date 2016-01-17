import React, {PropTypes} from 'react';
import {Doughnut} from 'react-chartjs';

import {COLORS_LIST} from '../../constants/chartColors';


const DoughnutChart = ({ data }) => {
  /* Add colors to the passed data */
  const coloredData = data.map((item) => {
    const selectedColor = COLORS_LIST[item.color];

    return Object.assign({}, item, {
      color: selectedColor.original,
      highlight: selectedColor.highlight,
    });
  });

  return <div className="Doughnut"><Doughnut data={coloredData} /></div>;
};

DoughnutChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    color: PropTypes.oneOf(
      Object.keys(COLORS_LIST)
    ).isRequired,
  })),
};


export default DoughnutChart;
