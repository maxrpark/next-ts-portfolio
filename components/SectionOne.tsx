import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

type Props = {
  projects: any[];
};

const SectionOne: NextPage<Props> = ({ projects }) => {
  const gsapAnimation = () => {
    const cards = gsap.utils.toArray('.card');
    cards.forEach((card: any, i: number) => {
      gsap.set(card, {
        // y: i * 30,
        x: i % 2 === 0 ? i * -70 : i * 70,
        scale: (1 + i) * 0.2,
      });
    });

    const tl = gsap.timeline({
      ease: 'none',
      scrollTrigger: {
        trigger: '.main-container',
        start: 'top top',
        toggleActions: 'play none reverse pause',
        scrub: 0.6,
        pinSpacing: '.main-container',
        markers: true,
        pin: '.main-container',
      },
    });

    const reversecardsArray = cards.slice(1).reverse();
    const firstCard = cards[0] as any;
    tl.to(
      reversecardsArray,
      {
        stagger: 0.07,
        scale: 4,
        x: gsap.utils.wrap([-1500, 1500]),
        y: 200,
        transformOrigin: 'center center',
      },
      '-=0.1'
    )
      .to(reversecardsArray, {
        stagger: 0.2,
        opacity: 0,
      })
      .to(
        firstCard,
        {
          stagger: 0.6,
          scale: 4,
          opacity: 0,
          duration: 1.5,
        },
        '=-1.4'
      )
      .to(
        '.section',
        {
          scale: 2,
        },
        0
      )
      .to(
        '.section',
        {
          scale: 10,
          background: 'black',
        },
        '=-1.4'
      );
  };

  useEffect(() => {
    if (projects.length > 0) gsapAnimation();
  }, []);
  return (
    <div className='main'>
      <section className={`section main-container`}>
        {projects.map((project) => {
          return (
            <div className={`card`} key={project.id}>
              <h3>{project.title}</h3>
              {/* <img src={project.url} alt='' /> */}
              <img src={project.cover_image} alt='' />
              {project.tag_list.map((tag: string) => {
                return <p key={tag}>{tag}</p>;
              })}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default SectionOne;
