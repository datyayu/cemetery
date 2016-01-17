/* eslint-env browser */
import React    from 'react'
import Header   from '../header/index.jsx'
import Releases from './releases.jsx'


class SeriesIndividualView extends React.Component {
  render () {
    let series = this.props.series

    if (series === null) {
      return (
        <div className='SeriesIndividual'>
          <Header title='Loading data...' search={false} />
          <img src='/public/assets/img/spinner.gif' />
        </div>
      )
    }


    let title  = series.get('info').get('title')
    let image  = series.get('info').get('image')
    let albums = series.get('albums')

    return (
      <div className='SeriesIndividual'>
        <Header title={title} search={false} />

        <div className='SeriesIndividual-content'>
          <img className='SeriesIndividual-image u-desktopOnly' src={image} />
          <Releases releases={albums} />
        </div>
      </div>
    )
  }
}


export default SeriesIndividualView
