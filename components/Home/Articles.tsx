import React, { useEffect } from "react";
import type { NextPage } from "next";
import { gsap } from "gsap";
import styled from "styled-components";
import { Post } from "../../ts/interfaces/globalInterfaces";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type Props = {
  blogPosts: Post[];
};

const SectionOne: NextPage<Props> = ({ blogPosts }) => {
  const gsapAnimation = () => {
    const cards = gsap.utils.toArray(".card");
    cards.forEach((card: any, i: number) => {
      gsap.set(card, {
        // y: i * 30,
        x: i % 2 === 0 ? i * -70 : i * 70,
        scale: (1 + i) * 0.2,
      });
    });

    const tl = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        trigger: ".main-container",
        start: "top top",
        toggleActions: "play none reverse pause",
        scrub: 0.6,
        pinSpacing: ".main-container",
        markers: true,
        pin: ".main-container",
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
        transformOrigin: "center center",
      },
      "-=0.1"
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
        "=-1.4"
      )
      .to(
        ".section",
        {
          scale: 2,
        },
        0
      );
    // .to(
    //   '.section',
    //   {
    //     scale: 10,
    //     rotate: 'black',
    //   },
    //   '=-1.4'
    // );
  };

  useEffect(() => {
    if (blogPosts.length > 0) gsapAnimation();
  }, []);
  return (
    <Wrapper className='main'>
      <section className={`section main-container`}>
        {blogPosts.map((project) => {
          return (
            <div className='card' key={project.id}>
              <img src={project.cover_image} alt='' />
              <div className='tags'>
                {project.tag_list.map((tag: string) => {
                  return (
                    <p className='single-tag' key={tag}>
                      {tag}
                    </p>
                  );
                })}{" "}
              </div>

              <a className='link' href={project.url}>
                Read
              </a>
            </div>
          );
        })}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  .section {
    position: relative;
    height: 100vh;
    overflow: hidden;
    background-image: url("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
  }
  .sectionTest {
    height: 600px;
    background: black;
  }

  .card {
    width: 300px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--white-color);
    border-radius: var();
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: c; */
  }
  .card img {
    width: 100%;
    object-fit: contain;
  }
  .tags {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.3rem;
    text-transform: capitalize;
    margin-top: 0.5rem;
  }
  .single-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--black-color);
    color: var(--white-color);
    padding: 0.1rem 0.2rem;
    border-radius: 0.5rem;
    transition: var(--transition-1);
    font-size: 0.8rem;
    height: 25px;
  }
  .single-tag:hover {
    /* opacity: 0.7; */
    background: red;
  }
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--black-color);
    color: var(--white-color);
    padding: 0.1rem 0.2rem;
    border-radius: 0.5rem;
    transition: var(--transition-1);
    font-size: 0.8rem;
    height: 25px;
    margin-top: 1rem;
  }
`;

export default SectionOne;
