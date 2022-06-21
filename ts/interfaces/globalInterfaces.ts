export interface articleWriter {
  github_username: string;
  name: string;
  profile_image: string;
  profile_image_90: string;
  twitter_username: string;
  username: string;
}

export interface Post {
  id: number;
  tag_list: string[];
  url: string;
  title: string;
  cover_image: string;
  user: articleWriter;
}
