import styled from "styled-components";

export const NotPlayingStyled = styled.section`
  display: flex;
  justify-content: center;
  .icon {
    display: grid;
    place-items: center;
    padding: 1rem;
    background-color: #212121;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    @media screen and (min-width: 480px) {
      padding: 2rem;
    }
  }
  .content {
    padding: 1rem;
    background-color: #121212;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    @media screen and (min-width: 480px) {
      padding: 2rem;
    }

    p {
      color: #b3b3b3;
    }
  }
`;
