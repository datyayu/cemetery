/* eslint-env browser */
import React from 'react'

import SeriesStore from '../stores/SeriesStore.js'
import SeriesActions from '../actions/SeriesActions.js'
import ApplicationActions from '../actions/ApplicationActions.js'

import SeriesListView from '../components/seriesListView/index.jsx'


class Series extends React.Component {
  constructor () {
    super()
    this.state = SeriesStore.getState()
  }

  render () {
    return (
      <div className="content">
        <SeriesListView seriesList={this.state.seriesList}/>
      </div>
    )
  }

  componentWillMount () {
    let season = this.props.params.seasonId || null
    SeriesActions.fetchSeriesList(season)
  }

  componentDidMount () {
    SeriesStore.listen(this.onChange.bind(this))
    ApplicationActions.updateMenuActiveItem(1)
  }

  componentWillUnmount () {
    SeriesStore.unlisten(this.onChange.bind(this))
  }

  onChange (state) {
    this.setState(state)
  }
}


export default Series
