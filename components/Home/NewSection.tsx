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
        start: "top center",
        toggleActions: "play none reverse pause",
        scrub: true,
        // pinSpacing: true,

        pin: ".newSection",
        // markers: true,
      },
    });
    tl.to(".left-text", {
      yPercent: -200,
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

    singleSection.forEach((element, index) => {
      let title = (element as HTMLElement).querySelector(".title");

      let sectionTL = gsap.timeline().to(title, {
        scale: 2,
        opacity: 1,
        x: 0,
        duration: 0.2,
      });

      ScrollTrigger.create({
        trigger: element as HTMLElement,
        start: "top 70%",
        // end: "-=300",
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
  overflow: hidden;
  height: fit-content;

  .single-section {
    width: 100%;
    height: 500px;
  }
  .left {
    flex-direction: column;
    /* height: 100%; */
    width: 100%;
  }
  .left-one {
    width: 100%;
    height: fit-content;
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
    position: relative;
  }
  .title {
    position: absolute;
    transform: translateY(-30px);
    opacity: 0;
  }
`;
export default NewSection;
