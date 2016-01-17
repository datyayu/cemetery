/* eslint-env browser */
import React       from 'react'
import Header      from '../header/index.jsx'
import SeasonsList from './seasonsList.jsx'


class SeasonsView extends React.Component {
  render () {
    if (this.props.seasons === null) {
      return (
        <div className='Seasons'>
          <Header title='Seasons' search={false} />
          <img src='/public/assets/img/spinner.gif' />
        </div>
      )
    }

    return (
      <div className="Seasons">
        <Header title="Seasons" search={false} />
        <SeasonsList seasons={this.props.seasons} />
      </div>
    )
  }
}


export default SeasonsView
