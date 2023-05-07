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
  background: ${({ theme }) => `${theme.colors.background}`};
  cursor: pointer;
  transition: 0.25s;
  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ color, theme }) =>
      `0 0.5em 0.5em -0.4em ${color ?? theme.colors.light}`};
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
