import type { NextPage } from "next";
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
interface Cordinates {
  x: number;
  y: number;
}

const CursorFollow: NextPage = () => {
  const ball = useRef<HTMLDivElement>(null!);
  const innerBall = useRef<HTMLDivElement>(null!);
  const [size, setSize] = useState<Number>();

  let pos: Cordinates;
  let mouse: Cordinates;
  if (typeof window !== "undefined") {
    pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    mouse = { x: pos.x, y: pos.y };
  }

  const moveCoursorFunc = (e: MouseEvent): void => {
    gsap.set(ball.current, { xPercent: -50, yPercent: -50 });
    const speed = 0.35;
    const xSet = gsap.quickSetter(ball.current, "x", "px");
    const ySet = gsap.quickSetter(ball.current, "y", "px");

    mouse!.x = e!.x;
    mouse!.y = e!.y;

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });

    // run costume function
    const target = e.target as HTMLElement;

    if (target && target.classList.contains("logo")) {
      ball.current.classList.add("ball-zoom");
      gsap.to(".logo", {
        scale: 1.2,
      });
    } else {
      ball.current.classList.remove("ball-zoom");
      gsap.to(".logo", {
        scale: 1,
      });
    }
  };

  useEffect(() => {
    setSize(window.innerWidth);
  }, []);
  const getWindowSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getWindowSize);
    if (size && size > 960) {
      window.addEventListener("mousemove", moveCoursorFunc);
      ball.current.style.display = "block";
    } else {
      ball.current.style.display = "none";
    }
    return () => {
      window.removeEventListener("mousemove", moveCoursorFunc);
      window.removeEventListener("resize", getWindowSize);
    };
  });
  return (
    <Wrapper>
      <div className='ball' ref={ball}>
        <div className='ball-inner' ref={innerBall}></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .ball {
    width: 50px;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    border: 3px solid white;
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
    transition: height 0.2s ease, width 0.2s ease;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ball-inner {
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    z-index: 2;
    display: none;
  }
  .ball-inner p {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    color: var(--color-white);
    text-transform: capitalize;
  }
  @media screen and (max-width: 1300px) {
    .ball {
      display: none;
    }
  }
  .zoom {
    transform: scale(5);
    max-height: 50px;
    max-width: 50px;
    animation: none;
  }
  .ball-zoom {
    width: 100px;
    height: 100px;
    border: 1px solid white;
  }
`;

export default CursorFollow;
