import React, { useEffect } from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import { Project } from "../../ts/interfaces/globalInterfaces";
import { wordpressSectionAnimation } from "../../utils/animations/wordpressSection";

interface Props {
  projects: Project[];
}

const Sectionthree: NextPage<Props> = ({ projects }) => {
  useEffect(() => {
    setTimeout(() => {
      wordpressSectionAnimation();
    }, 100);
  }, []);
  return (
    <Wrapper className='circle-container'>
      <div className='circle'></div>
      <div className='wp-title-container'>
        <h2 className='wp-title-text'></h2>
      </div>
      <div className='projects-container'>
        {projects.map((project: Project) => {
          return (
            <div className='singleProject' key={project.id}>
              <img src={project.url} alt='' />
              <h4>{project.name}</h4>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 0px;
    height: 0px;
    border-radius: 50%;
    z-index: -1;
    padding: 0px;
    height: 142vmax;
    width: 142vmax;
    line-height: 50px;
    background: black;
  }
  // title

  .wp-title-container {
    /* position: absolute;
    left: 50%; */
  }
  .wp-title-text {
    font-size: 3rem;
    color: white;
  }

  /// Projects

  .projects-container {
    display: flex;
    /* height: 100%; */
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
  .singleProject {
    height: 300px;
    width: 100%;
    background: white;
    border: 2px solid black;
    pad: 1rem;
  }
  img {
    width: 100%;
    height: 120px;
    object-fit: cover;
  }
`;

export default Sectionthree;
