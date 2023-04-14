import styled from "styled-components";

export const PlayingProgressStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  span {
    font-size: 11px;
    color: rgb(156 163 175);
  }
  progress {
    all: unset;
    border-radius: 8px;
    width: 100%;
    height: 2px;
    &[value]::-webkit-progress-value {
      background: #aaa;
    }
  }
`;
