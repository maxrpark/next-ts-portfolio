import type { NextPage } from 'next';
import styled from 'styled-components';
import { skills } from '../../utils';
import { SkillInt } from '../../ts/interfaces/globalInterfaces';
import gsap from 'gsap';
import { useEffect } from 'react';

type Props = {};

const Skills: NextPage<Props> = (props: Props) => {
  const animations = () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skill-container',
        start: 'top top',
        toggleActions: 'play none reverse pause',
        scrub: true,
        pinSpacing: true,

        pin: '.skill-container',
      },
    });

    tl.fromTo(
      '.skillIcon',
      {
        y: -200,
        x: -100,

        stagger: 0.3,
      },
      {
        y: 0,
        x: 0,
        rotate: 360,
        stagger: 0.3,
      }
    );
  };
  useEffect(() => {
    animations();
  }, []);

  return (
    <Wrapper className='skill-container'>
      {skills.map((skill: any) => {
        return (
          <div key={skill.id}>
            {skill.title}
            {skill.skills.map((k: any) => {
              return <div key={k.id}>{k.icon}</div>;
            })}
          </div>
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .skillIcon {
    font-size: 2rem;
  }
`;
export default Skills;
