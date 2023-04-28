import styled from "styled-components";

const borderRadius = "1rem";

export const NotPlayingStyled = styled.section`
  display: flex;
  justify-content: center;
  user-select: none;
  .icon {
    display: grid;
    place-items: center;
    padding: 1rem;
    background-color: #212121;
    border-top-left-radius: ${borderRadius};
    border-bottom-left-radius: ${borderRadius};
    /* @media screen and (min-width: 480px) {
      padding: 2rem;
    } */
  }
  .content {
    padding: 1rem;
    background-color: #121212;
    border-top-right-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* @media screen and (min-width: 480px) {
      padding: 2rem;
    } */

    p {
      color: #b3b3b3;
      font-size: clamp(0.8rem, 3vw, 1rem);
    }
  }
`;
