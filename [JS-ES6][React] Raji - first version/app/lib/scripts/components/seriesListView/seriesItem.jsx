/* eslint-env browser */
import React  from 'react'
import {Link} from 'react-router'


class SeriesItem extends React.Component {
  render () {
    return (
      <li className='Series-item'>
        <Link to={`/series/${this.props.id}`} >
          <img className='Series-image' src={this.props.image} />
          <p className='Series-title'> {this.props.title} </p>
        </Link>
      </li>
    )
  }
}

SeriesItem.propTypes = {
  link: React.PropTypes.string,
  img: React.PropTypes.string,
  title: React.PropTypes.string
}


export default SeriesItem
