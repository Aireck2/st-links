import { FC } from "react";
import styled from "styled-components";

const FooterStyled = styled.section`
  height: 100px;
  display: grid;
  place-items: center;
  color: rgb(156 163 175);
  margin-top: 100px;
`;

export const Footer: FC = ({}) => {
  return (
    <FooterStyled>
      <p>© 2023 Links - Made with ❤️ and ☕ ️ {"  "} by Erick Escriba</p>
    </FooterStyled>
  );
};
