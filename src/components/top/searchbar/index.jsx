import React, { Component } from "react";
import { Input } from "antd";
import styled from "@emotion/styled";
import "./style.scss";

const StyledSearchBar = styled(Input)`
  padding: 20px 20px;
  margin-right: 10px;
  border-radius: 4px;
  width: 300px;
`;

class SearchBar extends Component {
  render() {
    return (
      <div>
        <StyledSearchBar placeholder="Search by stops" />
      </div>
    );
  }
}

export default SearchBar;
