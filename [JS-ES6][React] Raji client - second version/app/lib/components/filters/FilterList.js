import React, {PropTypes} from 'react';
import FilterItem from './FilterItem';


const defaultFilters = [
  'ALL', '#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'X', 'Z'
];

const FilterList = ({filters=defaultFilters, activeItem='ALL'}) =>
  <ul className="Series-filters">
  {
    filters.map((filter, index) =>
      <FilterItem key={index} filter={filter} isActive={filter === activeItem} />
    )
  }
  </ul>
;


FilterList.PropTypes = {
  filterList: PropTypes.arrayOf(PropTypes.string),
  activeItem: PropTypes.string
};





export default FilterList;
