import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { useEffect } from "react";

const WordpressProjects: NextPage = () => {
  const animations = () => {
    // Section Pinning
    gsap.utils.toArray(".scroll-section").forEach((section) => {
      // Check if section has horizontal scrolling
      if ((section as any).id === "horizontal") {
        const cards = (section as any).querySelector(".section__cards")!;
        const card = (section as any).querySelector(".section__card")!;

        gsap.to(cards, {
          x: () => {
            return -cards.scrollWidth + card.offsetWidth;
          },
          ease: "none",
          scrollTrigger: {
            trigger: section as any,
            start: () => "center center",
            scroller: "#smooth-scroll",
            // end: () => `+=${cards.scrollWidth - card.offsetWidth}`,
            scrub: true,
            pin: true,
            pinSpacing: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
        // Use standard vertical scroll pinning
      }
      // else {
      //   ScrollTrigger.create({
      //     trigger: section as any,
      //     start: () => "top top",
      //     pin: true,
      //     pinSpacing: true,
      //     anticipatePin: 1,
      //   });
      // }
    });
  };
  useEffect(() => {
    setTimeout(() => {
      animations();
    }, 1000);
    // dragIt();
  }, []);
  return (
    <Wrapper className='container-wrapper'>
      <section className='scroll-section --red'>
        <div className='section__card'>
          <h1 className='section__title'>Section 1</h1>
        </div>
      </section>
      <section className='scroll-section'>
        <div className='section__card'>
          <h1 className='section__title'>Section 2</h1>
        </div>
      </section>
      <section className='scroll-section' id='horizontal'>
        <div className='section__cards'>
          <div className='section__card'>
            <h1 className='section__title'>Section 3a</h1>
          </div>
          <div className='section__card'>
            <h1 className='section__title'>Section 3b</h1>
          </div>
          <div className='section__card'>
            <h1 className='section__title'>Section 3c</h1>
          </div>
        </div>
      </section>
      {/* <section className='scroll-section'>
        <div className='section__card'>
          <h1 className='section__title'>Section 4</h1>
        </div>
      </section> */}
      {/* 
      <section className='scroll-section' id='horizontal'>
        <div className='section__cards'>
          <div className='section__card'>
            <h1 className='section__title'>Section 3a</h1>
          </div>
          <div className='section__card'>
            <h1 className='section__title'>Section 3b</h1>
          </div>
          <div className='section__card'>
            <h1 className='section__title'>Section 3c</h1>
          </div>
        </div>
      </section> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-x: hidden;
  background-color: #1b2b34;
  /* height: 100vh; */

  .scroll-section {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5vw;
    box-sizing: border-box;
  }

  .section__cards {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
  }

  .section__card {
    background-color: coral;
    border-radius: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: center;
  }
  .section__card + .section__card {
    margin-left: 5vw;
  }

  .section__title {
    color: #1b2b34;
  }

  .section[data-type="horizontal"] {
    overflow-x: hidden;
  }
`;
export default WordpressProjects;
