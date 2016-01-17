import './styles.scss';
import React from 'react';
import {render} from 'react-dom';
import App from './App';


/**
 * Create a div an render the app there.
 * @return {void}.
 */
function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);
  render(<App />, app);
}


main();
