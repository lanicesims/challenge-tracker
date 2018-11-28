import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from '../Navigation';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles';

const App = () => (
  <Router>
    <Navigation />
  </Router>
);

export default App;