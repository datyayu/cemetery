/* eslint-env browser */
import React from 'react'

import SeriesStore from '../stores/SeriesStore.js'
import SeriesActions from '../actions/SeriesActions.js'
import ApplicationActions from '../actions/ApplicationActions.js'

import SeasonsView from '../components/seasonsView/index.jsx'


class Series extends React.Component {
  constructor (props) {
    super(props)
    this.state = SeriesStore.getState()
  }

  render () {
    return (
      <div className="content">
        <SeasonsView seasons={this.state.seasons} />
      </div>
    )
  }

  componentWillMount () {
    SeriesActions.fetchSeasons()
  }

  componentDidMount () {
    SeriesStore.listen(this.onChange.bind(this))
    ApplicationActions.updateMenuActiveItem(2)
  }

  componentWillUnmount () {
    SeriesStore.unlisten(this.onChange.bind(this))
  }

  onChange (state) {
    this.setState(state)
  }
}


export default Series
