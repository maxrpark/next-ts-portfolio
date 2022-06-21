import type { NextPage } from 'next';
import { Articles, SectionTwo, Sectionthree } from '../components';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import { Post } from '../ts/interfaces/globalInterfaces';
interface Props {
  blogPosts: Post[];
}

const Home: NextPage<Props> = ({ blogPosts }) => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Hello World</h1>
        <h2>I'm Max</h2>
      </div>

      <section className={styles.sectionTest}></section>
      <Articles blogPosts={blogPosts} />
      <SectionTwo />
      <Sectionthree />
      <section className={styles.sectionTest}></section>
      <section className={styles.sectionTest}></section>
      <section className={styles.sectionTest}></section>
    </div>
  );
};

export async function getStaticProps() {
  const resp = await fetch('https://dev.to/api/articles?username=maxrpark');
  // const resp = await fetch(
  //   'https://my-portfolio-blog-website.netlify.app/api/myProjects'
  // );
  const data = await resp.json();

  return {
    props: {
      blogPosts: data.slice(0, 5),
    },
  };
}
const Wrapper = styled.div`
  font-size: 40px;
  color: red;
`;
export default Home;
