import React, { Component } from 'react';
import './App.css';
import Movie from "./Containers/Movie/Movie";
import Jokes from "./Containers/Jokes/Jokes";


class App extends Component {


  render() {
      return(
    <div className="App">
        <Movie/>
        <Jokes/>
    </div>
    )
  }
}

export default App;
