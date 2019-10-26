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
  cursor: pointer;
  &:hover {
    background-color: #f5c75a;
  }
`;

const Click = ({ onRequestComplete }) => {
  const [isSubmitting, setSubmitting ] = React.useState(false);

  return (
    <div className="btn">
      <StyledClick
        disabled={isSubmitting}
        type="primary"
        onClick={() => {
          setSubmitting(true);
          makeRequest().then((data) => {
            onRequestComplete(data);
            setSubmitting(false);
          });
        }}
      >
        Get Train Timetable
      </StyledClick>
    </div>
  );
};

export default Click;
