import { useTheme } from "styled-components";

import { constants } from "@/config/constants";

import { ButtonStyled, VerticalListStyled } from "./styles";

const HorizontalSocialLinks = () => {
  const theme: any = useTheme();

  return (
    <VerticalListStyled>
      {constants.socialLinks.map(({ url, name, label, color, icon: Icon }) => (
        <ButtonStyled key={name} color={color}>
          <a href={url}>
            <Icon color={color ?? theme.colors.textColor} width={20} />
            <span className="label">{label}</span>
          </a>
        </ButtonStyled>
      ))}
    </VerticalListStyled>
  );
};
export default HorizontalSocialLinks;
