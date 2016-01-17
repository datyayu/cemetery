import React from 'react'
import {Link} from 'react-router'


class ReleaseItem extends React.Component {
  render () {
    return (
      <li className='SeriesIndividual-item'>
        <Link to={`/releases/${this.props.id}`}>
          <img className='SeriesIndividual-album_image' src={this.props.image} />
          <p className='SeriesIndividual-album_title'> {this.props.text} </p>
        </Link>
      </li>
    )
  }
}

ReleaseItem.propTypes = {
  id: React.PropTypes.string,
  title: React.PropTypes.string,
  img: React.PropTypes.string
}

ReleaseItem.defaultProps = { img: '/public/assets/img/covers/defaultCover.png'}


export default ReleaseItem
