/* eslint-env browser */
import React from 'react'

import SeriesStore from '../stores/SeriesStore.js'
import SeriesActions from '../actions/SeriesActions.js'
import ApplicationActions from '../actions/ApplicationActions.js'

import SeriesIndividualView from '../components/seriesIndividualView/index.jsx'


class seriesIndividual extends React.Component {
  constructor () {
    super()
    this.state = SeriesStore.getState()
  }

  render () {
    return (
      <div className="content">
        <SeriesIndividualView series={this.state.series} />
      </div>
    )
  }

  componentWillMount () {
    SeriesActions.fetchSeries(this.props.params.seriesId)
  }

  componentDidMount () {
    SeriesStore.listen(this.onChange.bind(this))
    ApplicationActions.updateMenuActiveItem(-1)
  }

  componentWillUnmount () {
    SeriesStore.unlisten(this.onChange.bind(this))
  }

  onChange (state) {
    this.setState(state)
  }
}


export default seriesIndividual
