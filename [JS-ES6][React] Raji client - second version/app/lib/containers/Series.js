import React from 'react';
import Header from '../components/header/Header';
import FilterList from '../components/filters/FilterList';
import SeriesList from '../components/series/SeriesList';
import {series as seriesArray} from '../../../db/series.json';


const Series = () =>
  <div className="content">
    <div className="Series">
      <Header title="Series" search={false} />
      <FilterList />
      {
        !seriesArray ?
          <img src="/assets/img/spinner.gif" />
        :
          <SeriesList list={seriesArray}/>
      }
    </div>
  </div>
;


export default Series;
