import React from 'react';
import DoughnutStats from '../components/StatsWrappers/DoughnutStats';
import LargeTextStats from '../components/StatsWrappers/LargeTextStats';


const mockData = [
  {'value': 432, 'label': 'No Evaluadas', color: 'red'},
  {'value': 123, 'label': 'Evaluadas', color: 'green'},
];


const Home = () =>
  <div className="Content">
    <DoughnutStats chartData={mockData} name="Palabras Afectivas" />
    <LargeTextStats value="25" name="Usuarios Registrados" />
    <LargeTextStats value="402" name="Evaluaciones Realizadas" />
  </div>
;


export default Home;
