import React, {PropTypes} from 'react';


const FilterItem = ({filter, isActive}) =>
  <li className="Series-filter">
    <a href="#" className={`Series-link ${isActive ? 'is-active' : ''}`}>
      {filter}
    </a>
  </li>
;


FilterItem.PropTypes = {
  filter: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

FilterItem.defaultProps = {
  isActive: false
};



export default FilterItem;
