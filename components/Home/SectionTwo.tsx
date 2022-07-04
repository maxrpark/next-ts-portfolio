import React, { useEffect } from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SectionTwo: NextPage = () => {
    const animations = () => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sectionTwo",
                start: "top top",
                toggleActions: "play none reverse pause",
                scrub: 0.6,
                markers: true,
                pinSpacing: true,
                pin: true,
                // end: () => '+=' + reversedColors.length * 150,
            },
        });

        tl.to(".title", {
            opacity: 1,
            scale: 5,
            y: -100,
            color: "white",
        })
            .to(".sub-title", {
                opacity: 1,
                scale: 5,
                // y: -100,
                color: "white",
            })
            .to(".title", {
                x: 1000,
                opacity: 0,
            })
            .to(
                ".sub-title",
                {
                    x: -1000,
                    opacity: 0,
                },
                "<="
            );
    };

    useEffect(() => {
        animations();
    }, []);
    return (
        <Wrapper className='sectionTwo'>
            <h2 className='text title'>Visit all my projects</h2>
            <h3 className='text sub-title'>See more</h3>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    height: 100vh;
    overflow: hidden;
`;
export default SectionTwo;
