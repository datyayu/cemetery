import {Route, NotFoundRoute} from 'react-router'
/*eslint-disable*/
import React from 'react'
/*eslint-enable*/

import App from './appContainer.jsx'
import Player from './views/player.jsx'
import Series from './views/series.jsx'
import Release from './views/release.jsx'
import Seasons from './views/seasons.jsx'
import Playlists from './views/playlists.jsx'
import SeriesIndividual from './views/seriesIndividual.jsx'


let routes = (
  <Route handler={App}>
    <Route path="/player" handler={Player} />

    <Route path="/series" handler={Series} />
    <Route path="/series/:seriesId" handler={SeriesIndividual} />
    <Route path="/releases/:releaseId" handler={Release} />

    <Route path="/seasons" handler={Seasons} />
    <Route path="/seasons/:seasonId" handler={Series} />

    <Route path="/playlists" handler={Playlists} />
    <Route path="/playlists/:playlistId" handler={Release} />

    <NotFoundRoute handler={Player} />
  </Route>
)


export default routes
