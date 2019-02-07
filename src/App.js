import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// component
import Gallery from 'components/Gallery/Gallery';

const App = () => (
  <Router>
    <Route path="/" render={props => <Gallery {...props} blocksCount={30} />} />
  </Router>
);

export default App;
