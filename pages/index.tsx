import type { NextPage } from "next";
import { SmoothScrollProvider } from "../utils/animations/SmoothScroll";
import {
  Articles,
  SectionTwo,
  FeaturedProjects,
  Skills,
  CursorFollow,
  WordpressProjects,
  NewSection,
} from "../components";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { Post } from "../ts/interfaces/globalInterfaces";
interface Props {
  blogPosts: Post[];
  projects: any[];
}

const Home: NextPage<Props> = ({ blogPosts, projects }) => {
  // console.log("hey");

  return (
    <SmoothScrollProvider>
      <div className={styles.container}>
        {/* <CursorFollow /> */}
        <div>
          <h1>Hello World</h1>
          <h2>I'm Max</h2>
        </div>
        {/* 
        <section className={styles.sectionTest}></section>
        <section className={styles.sectionTest}></section>
        <section className={styles.sectionTest}></section>
        <Articles blogPosts={blogPosts} /> */}
        {/* <NewSection /> */}
        <WordpressProjects projects={projects.slice(0, 3)} />
        {/* <FeaturedProjects /> */}

        {/* <Skills /> */}

        {/* <SectionTwo /> */}

        {/* <FeaturedProjects /> */}

        <section className={styles.sectionTest}></section>
        <section className={styles.sectionTest}></section>
        <section className={styles.sectionTest}></section>
        <section className={styles.sectionTest}></section>
        <section className={styles.sectionTest}></section>
        <section className={styles.sectionTest}></section>
        <section className={styles.sectionTest}></section>
        <section className={styles.sectionTest}></section>
        <section className={styles.sectionTest}></section>
        <section className={styles.sectionTest}></section>
        <section className={styles.sectionTest}></section>
        <section className={styles.sectionTest}></section>
      </div>
    </SmoothScrollProvider>
  );
};

export async function getStaticProps() {
  const resp = await fetch("https://dev.to/api/articles?username=maxrpark");
  const res = await fetch(
    "https://my-portfolio-blog-website.netlify.app/api/myProjects"
  );
  const data = await resp.json();
  const project = await res.json();

  return {
    props: {
      blogPosts: data.slice(0, 5) as Post,
      projects: project.filter((project: any) =>
        project.tags.find((p: string) => p === "wordpress")
      ),
    },
  };
}
const Wrapper = styled.div`
  font-size: 40px;
  color: red;
`;
export default Home;
