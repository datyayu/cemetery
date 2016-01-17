import alt from '../utils/alt.js'
import DataFetcher from '../utils/DataFetcher.js'


class SeriesActions {
  fetchSeries (seriesId) {
    this.dispatch()

    DataFetcher
      .fetchSeries(seriesId)
      .then((series) => { this.actions.updateSeries(series) })
  }

  fetchSeriesList (query) {
    this.dispatch()

    DataFetcher
      .fetchSeriesList(query)
      .then((seriesList) => { this.actions.updateSeriesList(seriesList) })
  }

  fetchSeasons () {
    this.dispatch()

    DataFetcher
      .fetchSeasons()
      .then((seaons) => { this.actions.updateSeasons(seaons) })
  }

  updateSeries (series)         { this.dispatch(series) }
  updateSeriesList (seriesList) { this.dispatch(seriesList) }
  updateSeasons (seasons)       { this.dispatch(seasons) }

}


export default alt.createActions(SeriesActions)
