import React, { useEffect } from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import { Post } from "../../ts/interfaces/globalInterfaces";
import { SingleArticle } from "../";
import { articleAnimation } from "../../utils/animations";

type Props = {
  blogPosts: Post[];
};

const SectionOne: NextPage<Props> = ({ blogPosts }) => {
  useEffect(() => {
    articleAnimation();
  }, []);
  return (
    <Wrapper className='main'>
      <section className={`section main-container`}>
        <div className='article-section__title'>
          <div className='title-wrapper'>
            <h2 className='article-title'>Hello</h2>

            <h2 className='article-title'>World</h2>
          </div>
          <div className='article-section__subtitle'>
            {/* <h3>Read them on Medium</h3> */}
            <h3>My</h3>
            <h3>latest</h3>
            <h3>Articles</h3>
            {/* <h3>Medium</h3> */}
          </div>
        </div>

        {blogPosts.map((post) => {
          return <SingleArticle post={post} key={post.id} />;
        })}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  /*  */
  .section {
    /* position: relative; */
    height: 100vh;
    overflow: hidden;
    /* background-image: url("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
  }
  .article-section__title {
    position: absolute;
    color: white;
    font-size: 3rem;
    text-align: center;
    /* display: flex; */
    width: 100%;
    z-index: 1;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
  .article-title {
    display: inline-block;
  }
  .article-section__subtitle {
    /* transform: translateY(-100%);
    opacity: 1; */
    display: flex;
    justify-content: center;
    gap: 1rem;
    overflow: hidden;
    transform-origin: top center;
  }

  .article-section__subtitle h3 {
    transform: translateY(-100%);
    opacity: 0;
  }
  .article-title {
    /* position: absolute;
    color: white;
    font-size: 3rem;
    text-align: center;
    z-index: 1;
    top: 10%;
    left: 50%;
    transform: translateX(-50%); */
  }
`;

export default SectionOne;
