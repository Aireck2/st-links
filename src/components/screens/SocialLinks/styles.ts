import styled from "styled-components";

export const SocialStyled = styled.div`
  margin-top: 20px;
  display: flex;
  grid-gap: 20px;
  min-width: 200px;
  justify-content: center;
  & a:hover {
    transform: scale(1.075);
  }
`;

export const VerticalListStyled = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  justify-content: center;
  width: 100%;
`;

export const ButtonStyled = styled.button<{ color?: string }>`
  all: unset;
  border-radius: 8px;
  padding: 1rem 2rem;
  border: ${({ color, theme }) => `2px solid ${color ?? theme.colors.light}`};
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  a {
    all: unset;
    color: ${({ theme }) => theme.colors.light};
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    grid-gap: 10px;
    .label {
      justify-self: center;
    }
  }
`;
