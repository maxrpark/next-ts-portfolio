import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export const wordpressSectionAnimation = () => {
  gsap.set(".projects-container", {
    xPercent: 100,
  });

  const lt = gsap.timeline({
    ease: "none",
    scrollTrigger: {
      trigger: ".circle-container",
      scroller: "#smooth-scroll",
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
    .to(
      ".projects-container",
      {
        xPercent: -100,
        x: () => innerWidth,
        duration: 3,
      },
      0
    )
    .to(
      ".wp-title-text",
      {
        duration: 1,
        text: "Wordpress Projects",
        ease: "none",
        // delimiter: " ",
      },
      0
    )
    .to(".circle", {
      scale: 1,
      duration: 1,
      background: "blue",
      borderRadius: 0,
      width: "100vw",
      height: "20%",
    })
    .to(
      ".wp-title-text",
      {
        duration: 1,
        text: "This is the new text",
        ease: "none",
        // delimiter: " ",
      },
      "<"
    )
    .to(
      ".circle",
      {
        rotate: -90,
        height: "60%",
      }
      // "-=.5"
    )
    .to(".wp-title-text", {
      duration: 1,
      text: "Hello baby",
      ease: "none",
      // delimiter: " ",
    });
};
