import { AdaptGithubData, GithubData } from "@/types/api/github";

export const adaptGithubProfile = (
  profile: Partial<GithubData>
): Partial<AdaptGithubData> => {
  return {
    id: profile.id,
    name: profile.name,
    alias: profile.login,
    avatarUrl: profile.avatar_url,
    url: profile.html_url,
    company: profile.company,
    blog: profile.blog,
    location: profile.location,
    email: profile.email,
    bio: profile.bio,
    publicRepos: profile.public_repos,
    publicGists: profile.public_gists,
    followers: profile.followers,
    following: profile.following,
    createdAt: profile.created_at,
    updatedAt: profile.updated_at,
  };
};
