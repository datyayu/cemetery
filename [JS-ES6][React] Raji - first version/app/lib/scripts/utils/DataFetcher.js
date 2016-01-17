/* eslint-env browser */
import Immutable from 'immutable'


class DataFetcher {
  fetchSeries (seriesId) {
    return this.fetchData(`/public/db/series/${seriesId}.json`)
  }


  fetchSeriesList (seasonId) {
    let query = seasonId ? `seasons/${seasonId}.json` : 'series.json'
    return this.fetchData(`/public/db/${query}`)
  }


  fetchSeasons () {
    return this.fetchData('/public/db/seasons.json')
  }


  fetchPlaylistsList () {
    return this.fetchData('/public/db/playlists.json')
  }


  fetchPlaylist (query) {
    return this.fetchData(`/public/db/${query}`)
  }


  fetchData (url) {
    return new Promise((resolve) => {
      fetch(url)
        .then((response) => response.json())
        .then((data)     => resolve( Immutable.fromJS(data) ))
    })
  }


  parseTime (seconds) {
    if (seconds !== undefined && !isNaN(seconds)) {
      let mins = Math.floor(seconds / 60)
      let secs = Math.floor(seconds % 60)
      let parsedMins = (`0${mins.toString()}`).slice(-2)
      let parsedSecs = (`0${secs.toString()}`).slice(-2)

      return `${parsedMins}:${parsedSecs}`
    }

    // Probably the service doesn't has any info yet, inform the user that has to wait.
    return 'Loading...'
  }
}


export default new DataFetcher()
