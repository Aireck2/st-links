import Image from "next/image";

import styled from "styled-components";

export const AvatarStyled = styled(Image)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: fill;
  object-position: center;
`;
