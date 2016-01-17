import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const SeriesItem = ({id, image, title}) =>
  <li className="Series-item">
    <Link to={`/series/${id}`} >
      <img className="Series-image" src={image} />
      <p className="Series-title"> {title} </p>
    </Link>
  </li>
;


SeriesItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};


export default SeriesItem;
