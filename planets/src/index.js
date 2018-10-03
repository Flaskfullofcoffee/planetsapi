import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Planets from './Planets.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Planets />, document.getElementById('root'));
registerServiceWorker();
