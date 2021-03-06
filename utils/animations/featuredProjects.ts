import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect } from "react";

export const featuredProjectsAnimation = () => {
  gsap.set(".projects-container", {
    xPercent: 100,
  });

  const lt = gsap.timeline({
    ease: "none",
    scrollTrigger: {
      trigger: ".circle-container",
      start: "top top",
      toggleActions: "play none reverse pause",
      scrub: true,
      pinSpacing: true,
      end: () =>
        "+=" +
        (document.querySelector(".projects-container") as HTMLElement)!
          .offsetWidth *
          2,

      pin: ".circle-container",
    },
  });

  lt.to(".circle", {
    scale: 1,
    duration: 2,
  })
    .to(".circle", {
      scale: 1,
      duration: 1,
      background: "blue",
      borderRadius: 0,
      width: "100vw",
      height: "60%",
    })
    .to(
      ".circle",
      {
        rotate: -90,
      }
      // "-=.5"
    )
    .to(
      ".projects-container",
      {
        xPercent: -100,
        x: () => innerWidth,
        duration: 3,
      },
      1
    )
    .to(
      ".singleProject",
      {
        scale: 1.2,
        stagger: 0.3,
      },
      "-=2.5"
    )
    .to(
      ".singleProject",
      {
        scale: 1.0,
        // rotate: 360,
        duration: 5,
        stagger: 0.3,
      },
      "=<"
    )
    .to(
      ".wp-title-text",
      {
        color: " white",
      },
      0.2
    );
};
