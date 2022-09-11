import { useEffect } from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import { HorizontalScrollingAnimation } from "../../utils/animations";
interface Props {
  type: string;
  animationType?: string;
}

const WordpressProjects: NextPage<Props> = ({ type, animationType }) => {
  useEffect(() => {
    setTimeout(() => {
      HorizontalScrollingAnimation(type);
    }, 100);
  }, []);
  return (
    <Wrapper className='container-wrapper'>
      <section className={`${type} scroll-section `} id='from-right'>
        <div
          className={`${animationType ? animationType : ""} section__cards `}
        >
          <div className='section__card'>
            <h1 className='section__title'>ONE</h1>
          </div>
          <div className='section__card'>
            <h1 className='section__title'>TWO</h1>
          </div>
          <div className='section__card'>
            <h1 className='section__title'>THREE</h1>
          </div>
        </div>
      </section>
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
    gap: 2rem;
    padding: 2rem;
  }

  .start-left {
    flex-direction: row-reverse;
    justify-content: unset;
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
  /* .section__card + .section__card {
    margin-left: 5vw;
  } */

  .section__title {
    color: #1b2b34;
  }

  /* .section[data-type="from-right"] {
    overflow-x: hidden;
  } */
`;
export default WordpressProjects;
