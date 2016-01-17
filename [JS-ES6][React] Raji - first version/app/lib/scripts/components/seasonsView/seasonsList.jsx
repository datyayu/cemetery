/* eslint-env browser */
import React from 'react'
import SeasonItem from './seasonItem.jsx'


class SeasonsList extends React.Component {
  render () {
    let seasonsListNodes = this.props.seasons.map((season) => {
      let id    = season.get('id')
      let image = season.get('image')

      return <SeasonItem key={id} id={id} image={image} />
    })

    return (
      <ul className='Seasons-list'>
        {seasonsListNodes}
      </ul>
    )
  }
}


export default SeasonsList
