/* eslint-env browser */
import React  from 'react'
import {Link} from 'react-router'

class SeasonsList extends React.Component {
  render () {
    return (
      <li className='Seasons-item'>
        <Link to={`/seasons/${this.props.id}`}>
          <img className='Seasons-image' src={this.props.image} />
        </Link>
      </li>
    )
  }
}


export default SeasonsList
