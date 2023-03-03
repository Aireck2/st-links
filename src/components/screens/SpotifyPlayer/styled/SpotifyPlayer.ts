import styled from "styled-components";

const common = `
  border-radius: 1rem;
`;
const bgBr = "2rem";

export const PlayerStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${bgBr};
  margin: auto;
  max-width: 700px;
  box-shadow: 4px 4px 12px #121212, -4px -4px 12px #313131;
  .albumImage {
    ${common};
    @media screen and (min-width: 576px) {
      width: 100%;
      height: 100%;
      max-height: 150px;
      max-width: 150px;
    }
  }
  position: relative;
  .bg-image {
    position: absolute;
    z-index: 10;
    object-fit: cover;
    border-radius: ${bgBr};
  }
  .container {
    width: 100%;
    height: 100%;
    backdrop-filter: blur(1rem);
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: ${bgBr};
    position: relative;
    z-index: 20;
    object-fit: cover;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 20px;
    @media screen and (min-width: 480px) {
      flex-direction: row;
    }
    .content {
      min-width: 100%;
      align-self: flex-start;
      @media screen and (min-width: 480px) {
        min-width: 260px;
      }
    }
    .album-title {
      color: #ccc;
      font-size: 16px;
      font-weight: normal;
      font-size: clamp(0.8rem, 2vw, 1rem);
    }
    .song-title {
      color: white;
      font-size: clamp(0.9rem, 3.5vw, 1.4rem);
      font-weight: normal;
    }
    .artist-title {
      color: #ccc;
      font-weight: normal;
      font-size: clamp(0.8rem, 2vw, 1rem);
    }
  }
`;
