import type { NextPage } from "next";
import styled from "styled-components";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type Props = {};

const NewSection: NextPage = () => {
  const animation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".newSection",
        start: "top top",
        toggleActions: "play none reverse pause",
        scrub: true,
        pinSpacing: true,

        pin: ".newSection",
        markers: true,
      },
    });
    tl.to(".left-one", {
      yPercent: -100,
    }).to(
      ".right",
      {
        background: "blue",
      },
      "-=.5"
    );
  };

  const sectionAnimation = () => {
    let singleSection = gsap.utils.toArray(".left-text");

    singleSection.forEach((element) => {
      let title = (element as HTMLElement).querySelector(".title");

      let sectionTL = gsap.timeline().to(title, {
        rotate: 360,
        background: "white",
      });

      ScrollTrigger.create({
        trigger: element as HTMLElement,
        start: "top top",
        toggleActions: "play none reverse pause",
        scrub: true,
        markers: true,
        animation: sectionTL,
      });
    });
  };
  useEffect(() => {
    gsap.set(".left-text", {
      background: gsap.utils.wrap(["orange", "red", "yellow"]),
    });
    gsap.set(".single-section", {
      background: gsap.utils.wrap(["red", "pink"]),
    });
    animation();
    sectionAnimation();
  }, []);
  return (
    <Wrapper className='newSection'>
      <div className='single-section left'>
        <div className='left-one'>
          <div className='left-text'>
            <h2 className='title'>React</h2>
          </div>
          <div className='left-text'>
            <h2 className='title'>Vue</h2>
          </div>
          <div className='left-text'>
            <h2 className='title'>Django</h2>
          </div>
        </div>
      </div>
      <div className='single-section right'>Hello</div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: stretch;
  .single-section {
    width: 100%;
    max-height: 500px;
    overflow: hidden;
  }
  .left {
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  .left-one {
    width: 100%;
    height: 1500px;
  }
  .left-text {
    /* opacity: 0; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
    background: blue;
    border: 2px solid red;
  }
`;
export default NewSection;
