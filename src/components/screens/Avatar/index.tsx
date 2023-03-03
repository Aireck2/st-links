import { useGetGithub } from "@/hooks/useGetGithub";

import { AvatarStyled } from "./styles";

const Avatar = () => {
  const { data } = useGetGithub();
  return (
    <>
      {data?.avatarUrl ? (
        <AvatarStyled
          priority
          src={data.avatarUrl}
          alt="Profile picture"
          height={120}
          width={120}
        />
      ) : null}
    </>
  );
};
export default Avatar;
