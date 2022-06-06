import type { NextPage } from 'next';
import { SectionOne, SectionTwo, Sectionthree } from '../components';
import styles from '../styles/Home.module.css';

interface Props {
  projects: any[];
}

const Home: NextPage<Props> = ({ projects }) => {
  return (
    <div className={styles.container}>
      <div className='header'>
        <h1>Hello World</h1>
        <h2>I'm Max</h2>
      </div>

      <section className={styles.sectionTest}></section>
      <SectionOne projects={projects} />
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
      projects: data.slice(0, 5),
      // projects: data.slice(0, 5),
    },
  };
}

export default Home;
