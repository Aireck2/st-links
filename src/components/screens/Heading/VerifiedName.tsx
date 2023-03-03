import Image from "next/image";
import styled from "styled-components";

import { constants } from "@/config/constants";

const VerifiedStyled = styled.section`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  font-weight: bold;
  font-style: italic;
  color: ${({ theme }) => theme.colors.light};
`;

const VerifiedName = () => {
  return (
    <VerifiedStyled>
      <p>{constants.verified}</p>

      <Image
        src={constants.images.verified.src}
        alt="verified icon"
        height={16}
        width={16}
      />
    </VerifiedStyled>
  );
};

export default VerifiedName;
