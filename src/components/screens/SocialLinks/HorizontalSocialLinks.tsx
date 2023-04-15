import { useTheme } from "styled-components";

import { constants } from "@/config/constants";

import { SocialStyled } from "./styles";

const HorizontalSocialLinks = () => {
  const theme: any = useTheme();

  return (
    <SocialStyled>
      {constants.socialLinks.map(({ url, name, icon: Icon }) => (
        <a href={url} key={name}>
          <Icon color={theme.colors.textColor} width={24} />
        </a>
      ))}
    </SocialStyled>
  );
};
export default HorizontalSocialLinks;
