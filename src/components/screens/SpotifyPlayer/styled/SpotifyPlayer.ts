import styled from "styled-components";

const borderRadius = "1rem";
const albumSize = "6.25rem";
const minWidth = "480px";

export const PlayerStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${borderRadius};
  margin: auto;
  max-width: 480px;
  width: 100%;
  box-shadow: 1px 1px 3px #121212, -2px -2px 3px #313131;
  position: relative;
  cursor: default;

  @media screen and (min-width: ${minWidth}) {
    width: max-content;
  }

  .albumImage {
    border-radius: ${borderRadius};
    @media screen and (min-width: ${minWidth}) {
      width: 100%;
      height: 100%;
      max-height: ${albumSize};
      max-width: ${albumSize};
    }
  }

  .bg-image {
    position: absolute;
    z-index: 10;
    object-fit: cover;
    border-radius: ${borderRadius};
  }

  .container {
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(1rem);
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: ${borderRadius};
    position: relative;
    z-index: 20;
    object-fit: cover;
    padding: 0rem;
    display: flex;
    align-items: center;
    grid-gap: 20px;
    padding-right: ${borderRadius};

    .content {
      width: 100%;
      min-width: 100px;
      align-self: center;
      overflow: hidden;
    }
    .song-title,
    .artist-title {
      width: 100%;
      white-space: nowrap;
      &.mouseleave {
        animation-name: progressBar;
        animation-iteration-count: 1;
        animation-duration: 5s;
      }
    }

    .album-title {
      color: #ccc;
      font-size: 16px;
      font-weight: normal;
      font-size: clamp(0.8rem, 2vw, 0.85rem);
    }

    .song-title {
      color: white;
      font-size: clamp(0.9rem, 3vw, 1.1rem);
      font-weight: normal;
    }

    .artist-title {
      color: #ccc;
      font-weight: normal;
      font-size: clamp(0.8rem, 2vw, 0.85rem);
    }
  }

  @keyframes progressBar {
    0% {
      transform: translateX(-0%);
    }

    50% {
      transform: translateX(-30%);
    }
    100% {
      transform: translateX(-0%);
    }
  }
  @media screen and (min-width: ${minWidth}) {
    @keyframes progressBar {
      50% {
        transform: translateX(-20%);
      }
    }
  }
`;
