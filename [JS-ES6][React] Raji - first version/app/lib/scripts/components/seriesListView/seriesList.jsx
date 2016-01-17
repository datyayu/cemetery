/* eslint-env browser */
import React      from 'react'
import SeriesItem from './seriesItem.jsx'


class SeriesList extends React.Component {
  render () {
    let seriesListNodes = this.props.list.map((series) => {
      let id    = series.get('id')
      let image = series.get('image')
      let title = series.get('title')

      return <SeriesItem key={id} id={id} image={image} title={title} />
    })

    return (
      <ul className='Series-list'>
        {seriesListNodes}
      </ul>
    )
  }
}


export default SeriesList
