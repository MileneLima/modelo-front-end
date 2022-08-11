import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.button`
  background: #0090c5;
  height: 40px;
  border-radius: 5px;
  border: 0;
  width: 30%;
  float: right;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, "#0090C9")};
  }

  div {
    width: 25%;
    height: 40px;
    background-color: #006b92;
    border-radius: 5px 0 0 5px;
    float: left;
  }
`;
