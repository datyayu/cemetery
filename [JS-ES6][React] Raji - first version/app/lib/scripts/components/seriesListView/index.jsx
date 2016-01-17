/* eslint-env browser */
import React        from 'react'
import Header       from '../header/index.jsx'
import SeriesList   from './seriesList.jsx'
import SeriesFilter from './seriesFilter.jsx'


class SeriesView extends React.Component {
  render () {
    let seriesList = this.props.seriesList

    if (seriesList === null) {
      return (
        <div className='Series'>
          <Header title={this.props.title} search={false} />
          <img src='/public/assets/img/spinner.gif' />
        </div>
      )
    }

    let title       = seriesList.get('title')
    let seriesArray = seriesList.get('series')

    return (
      <div className="Series">
        <Header title={title} search={false} />
        <SeriesFilter />
        <SeriesList list={seriesArray}/>
      </div>
    )
  }
}

SeriesView.propTypes = { title: React.PropTypes.string }
SeriesView.defaultProps = {title: 'Series'}


export default SeriesView
