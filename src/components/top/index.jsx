import React, { Component } from "react";
import "./style.scss";
import Click from "./button";
import SearchBar from "./searchbar";

export default class TopSection extends Component {
  render() {
    return (
      <div className="top">
        <SearchBar />
        <Click />
      </div>
    );
  }
}
