import React from "react";
import { makeRequest } from "../../../API/departure_mon.jsx";
import { Button } from "antd";
import styled from "@emotion/styled";
import "./style.scss";

const StyledClick = styled(Button)`
  background-color: #ffd168;
  outline: none;
  padding: 20px 20px;
  border-radius: 4px;
`;

const Click = () => {
  return (
    <StyledClick
      type="primary"
      onClick={() => {
        makeRequest().then(console.log);
      }}
    >
      Get Train Timetable
    </StyledClick>
  );
};

export default Click;
