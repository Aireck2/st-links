import { useGetGithub } from "@/hooks/useGetGithub";

import { AvatarContainerStyled, AvatarStyled, NotImage } from "./styles";

const Avatar = () => {
  const { data } = useGetGithub();
  return (
    <AvatarContainerStyled>
      {data?.avatarUrl ? (
        <AvatarStyled
          priority
          src={data.avatarUrl}
          alt="Profile picture"
          height={120}
          width={120}
        />
      ) : (
        <NotImage />
      )}
    </AvatarContainerStyled>
  );
};
export default Avatar;
