import styled from "styled-components";

export const Bottom = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;

  display: flex;
  align-items: flex-end;

  color: black;

  .help {
    width: 2%;
    float: left;

    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      color: #8c8c8c;

      cursor: pointer;

      &:hover {
        color: #00579d;
      }
    }
  }

  .info {
    width: 98%;
    height: 2%;
    float: left;

    text-align: end;
  }

  p {
    font-size: 0.8rem;
  }
`;
