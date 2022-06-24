import type { NextPage } from 'next';
import styled from 'styled-components';
import gsap from 'gsap';
import { useEffect } from 'react';

type Props = {};

const NewSection: NextPage = () => {
  const animation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.newSection',
        start: 'top top',
        toggleActions: 'play none reverse pause',
        scrub: true,
        pinSpacing: true,

        pin: '.newSection',
        markers: true,
      },
    });
    tl.to('.left-text', {
      opacity: 1,
      // yPercent: -document.querySelector('.left-one')!.offsetHeight,
      yPercent: -document.querySelector('.left-one')!.offsetHeight,
      duration: 3,
    }).to(
      '.right',
      {
        background: 'blue',
      },
      '-=.5'
    );
  };
  useEffect(() => {
    gsap.set('.single-section', {
      background: gsap.utils.wrap(['red', 'pink']),
    });
    animation();
  }, []);
  return (
    <Wrapper className='newSection'>
      <div className='single-section left'>
        <div className='left-one'>
          <div className='left-text'>Hello</div>
          <div className='left-text'>from</div>
          <div className='left-text'>another planet</div>
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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
  }
  .left {
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  .left-one {
    width: 100%;
    overflow: hidden;
    max-height: 60vh;
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
