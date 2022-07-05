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
    if (blogPosts.length > 0) articleAnimation();
  }, []);
  return (
    <Wrapper className='main'>
      <section className={`section main-container`}>
        {blogPosts.map((post) => {
          return <SingleArticle post={post} />;
        })}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  .section {
    position: relative;
    height: 100vh;
    overflow: hidden;
    background-image: url("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
  }
  .sectionTest {
    height: 600px;
    background: black;
  }
`;

export default SectionOne;
