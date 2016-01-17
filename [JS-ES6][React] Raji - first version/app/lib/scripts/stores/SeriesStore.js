import Immutable from 'immutable'
import alt from '../utils/alt.js'
import SeriesActions from '../actions/SeriesActions.js'


class SeriesStore {
  constructor () {
    this.seriesList    = null
    this.series        = null
    this.seasons       = null
    this.currentSeason = null

    this.bindListeners({
      fetchSeries: SeriesActions.FETCH_SERIES,
      fetchSeriesList: SeriesActions.FETCH_SERIES_LIST,
      fetchSeasons: SeriesActions.FETCH_SEASONS,
      updateSeries: SeriesActions.UPDATE_SERIES,
      updateSeriesList: SeriesActions.UPDATE_SERIES_LIST,
      updateSeasons: SeriesActions.UPDATE_SEASONS
    })
  }



  fetchSeries () {
    if (this.series !== null) { this.series = this.series.clear() }
  }
  fetchSeriesList () {
    if (this.seriesList !== null) { this.seriesList = this.seriesList.clear() }
  }
  fetchSeasons () {
    if (this.seasons !== null) { this.seasons = this.seasons.clear() }
  }

  updateSeries (series)         { this.series     = series }
  updateSeriesList (seriesList) { this.seriesList = seriesList }
  updateSeasons (newSeasons)    { this.seasons    = newSeasons }
}


export default alt.createStore(SeriesStore)
