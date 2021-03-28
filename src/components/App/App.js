import React, { Component } from 'react';
import Chart from '../Chart/Chart';
import Search from '../Search/Search';

class App extends Component {

  render(){
    return (
      <>
        <div>
          <h1>Monthly Stock Prices</h1>
        </div>
        <div>
          <Search />
        </div>
        <div>
          <Chart />
        </div>
      </>
    )
  }
}

export default App;
