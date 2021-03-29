import React, { Component } from 'react';
import Chart from '../Chart/Chart';
import Search from '../Search/Search';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="container">
        <div>
          <h1>Monthly Stock Prices</h1>
        </div>
        <div>
          <Search />
        </div>
        <div>
          <Chart />
        </div>
      </div>
    )
  }
}

export default App;
