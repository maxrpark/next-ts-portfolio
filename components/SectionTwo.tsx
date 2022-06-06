import React, { useEffect } from 'react';
import type { NextPage } from 'next';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const SectionTwo: NextPage = () => {
  const animations = () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.sectionTwo',
        start: 'top center',
        toggleActions: 'play none reverse pause',
        scrub: 0.6,
        markers: true,
        pinSpacing: true,
        pin: true,
        // end: () => '+=' + reversedColors.length * 150,
      },
    });

    tl.to('.title', {
      opacity: 1,
      scale: 5,
      y: -100,
      color: 'white',
    })
      .to('.sub-title', {
        opacity: 1,
        scale: 5,
        // y: -100,
        color: 'white',
      })
      .to('.title', {
        x: 1000,
        opacity: 0,
      })
      .to(
        '.sub-title',
        {
          x: -1000,
          opacity: 0,
        },
        '<='
      );
  };

  useEffect(() => {
    animations();
  }, []);
  return (
    <div className='sectionTwo'>
      <h2 className='text title'>Visit all my projects</h2>
      <h3 className='text sub-title'>See more</h3>
    </div>
  );
};

export default SectionTwo;
