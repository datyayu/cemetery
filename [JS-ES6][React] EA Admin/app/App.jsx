import React from 'react';
import Home from './containers/Home';
import Navbar from './components/Navbar';


const App = React.createClass({
  render: () =>
    <div>
      <Navbar items={['Home', 'Stats', 'Login']}/>
      <Home />
    </div>
  ,
});


export default App;
