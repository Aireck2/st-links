import Image from "next/image";

import styled from "styled-components";

export const AvatarStyled = styled(Image)`
  width: 120px;
  height: 120px;
  background: #000;
  border-radius: 50%;
  object-fit: fill;
  object-position: center;
`;

export const NotImage = styled.div`
  width: 120px;
  height: 120px;
  background: #000;
  border-radius: 50%;
`;
