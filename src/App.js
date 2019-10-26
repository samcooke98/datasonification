import React, { Component } from "react";
import "./App.scss";

//Components
import TopSection from "./components/top/";

//creating a Functional Component
class App extends Component {
  render() {
    return (
      <div className="web-container">
        <div className="app-container">
          <div className="searchbar-section">
            <TopSection />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
