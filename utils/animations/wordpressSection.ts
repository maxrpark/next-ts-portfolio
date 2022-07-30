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
    background: "#222",
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
      },
      0
    )
    .to(
      ".wp-title-text",
      {
        duration: 1,
        text: "SEO OPTIMIZED",
        ease: "none",
        color: "yellow",
      },
      1.2
    )
    .to(
      ".circle",
      {
        duration: 1,
        background: "blue",
        borderRadius: 0,
        width: "100vw",
        height: "20%",
      },
      "<"
    )
    .to(".wp-title-text", {
      duration: 1,
      text: "RICH CONTENT",
      ease: "none",
      color: "yellow",
    })
    .to(
      ".circle",
      {
        duration: 1,
        rotate: -90,
        height: "60%",
      },
      "<"
    )
    .to(".circle", {
      duration: 1,
      // rotate: -90,
      height: "142vmax",
      width: "142vmax",
      scale: 0.4,
      borderRadius: "50%",
    })
    .to(
      ".single-project-desc",
      {
        stagger: {
          amount: 0.3,
        },
        yPercent: -100,
      },
      "<"
    );
};
