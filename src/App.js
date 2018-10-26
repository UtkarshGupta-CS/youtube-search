import React, { Component } from "react";
import "./App.css";
import { SearchContainer, VideoListContainer } from "./containers";
class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchContainer />
        <VideoListContainer />
      </div>
    );
  }
}

export default App;
