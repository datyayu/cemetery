/* eslint-env browser */
import React       from 'react'
import ReleaseItem from './releaseItem.jsx'


class Releases extends React.Component {
  render () {
    let releasesNodes = this.props.releases.map((release) => {
      let id    = release.get('id')
      let image = release.get('image')
      let text  = release.get('singleType')

      return <ReleaseItem key={id} id={id} text={text} image={image} />
    })

    return (
      <div className='SeriesIndividual-releases'>
        <h2 className='SeriesIndividual-title'> Releases </h2>
        <ul className='SeriesIndividual-list'>
          {releasesNodes}
        </ul>
      </div>
    )
  }
}


export default Releases
