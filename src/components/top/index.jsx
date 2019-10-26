import React, { Component } from "react";
import "./style.scss";
import Click from "./button";
import SearchBar from "./searchbar";

export default TopSection = ({onRequestComplete}) => {
    return (
      <div className="top">
        <SearchBar />
        <Click onRequestComplete={onRequestComplete}/>
      </div>
    );
  }
}
