import Image from "next/image";

import styled from "styled-components";

export const AvatarStyled = styled(Image)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: fill;
  object-position: center;
  border: 2px solid #000;
`;

export const NotImage = styled.div`
  width: 120px;
  height: 120px;
  background: ${(props) => props.theme.colors.background};
  border-radius: 50%;
`;

export const AvatarContainerStyled = styled.div`
  border: none;
  outline: none;
  color: #fff;
  position: relative;
  z-index: 0;
  border-radius: 50%;
  &:before {
    content: "";
    background: linear-gradient(
      90deg,
      #ea4335,
      rgb(86, 98, 246),
      rgb(232, 121, 33),
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 50%;
  }

  &:active {
    color: #000;
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 120px;
    height: 120px;
    left: 0;
    top: 0;
    border-radius: 50%;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
