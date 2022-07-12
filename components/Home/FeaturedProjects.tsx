import React, { useEffect } from "react";
import type { NextPage } from "next";
import { gsap } from "gsap";
import styled from "styled-components";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Project } from "../../ts/interfaces/globalInterfaces";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  projects: Project[];
}

const Sectionthree: NextPage<Props> = ({ projects }) => {
  const animation = () => {
    const lt = gsap.timeline({
      scrollTrigger: {
        trigger: ".circle-container",
        start: "top top",
        toggleActions: "play none reverse pause",
        scrub: true,
        pinSpacing: true,

        pin: ".circle-container",
      },
    });

    lt.to(".circle", {
      scale: 1,
      duration: 3,
    })
      .to(
        ".projects-container",
        {
          xPercent: -100,
          x: () => innerWidth,
          duration: 3,
        },
        0
      )
      .to(
        ".singleProject",
        {
          scale: 1.1,
          stagger: 0.3,
        },
        "-=2.5"
      )
      .to(".circle", {
        scale: 0.3,
        duration: 5,
        background: "blue",
      })
      .to(
        ".singleProject",
        {
          scale: 1.0,
          rotate: 360,
          duration: 5,
          stagger: 0.3,
        },
        "=<"
      );
  };
  useEffect(() => {
    gsap.set(".projects-container", {
      xPercent: 100,
    });
    animation();
  }, []);
  return (
    <Wrapper className='circle-container'>
      <div className='circle'></div>
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

  .projects-container {
    display: flex;
    height: 100%;
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
