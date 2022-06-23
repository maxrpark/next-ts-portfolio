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

export interface Project {
  id: string;
  name: string;
  gitUrl: string;
  pageUrl: string;
  projectID: string;
  shortDsc: string;
  tag: string[];
  url: string;
  version: string;
}
export interface SkillInt {
  id: number;
  name: string;
  icon: any;
}
