import React, {PropTypes} from 'react';
import SeriesItem from './seriesItem';


const SeriesList = ({list}) =>
  <ul className="Series-list">
  {
    list.map(({id, image, title}) => <SeriesItem key={id} id={id} image={image} title={title} />)
  }
  </ul>
;

SeriesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    image : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
};

export default SeriesList;
