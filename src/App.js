/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Gallery from 'components/Gallery/Gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gallery blocksCount={30} />
      </div>
    );
  }
}

export default App;
