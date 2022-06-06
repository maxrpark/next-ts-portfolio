import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Sectionthree: NextPage = () => {
  console.log('Sectionthree');
  const animation = () => {
    const lt = gsap.timeline({
      scrollTrigger: {
        trigger: '.circle-container',
        start: 'top top',
        toggleActions: 'play none reverse pause',
        scrub: 1,
        pinSpacing: true,
        pin: true,
      },
    });

    lt.to('.circle', {
      scale: 1,
      duration: 3,
    });
  };
  useEffect(() => {
    animation();
  }, []);
  return (
    <div className='circle-container'>
      <div className='circle'></div>
    </div>
  );
};

export default Sectionthree;
