import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const articleAnimation = () => {
  const cards = gsap.utils.toArray(".card");
  cards.forEach((card: any, i: number) => {
    gsap.set(card, {
      y: i * 30,
      x: i % 2 === 0 ? i * -10 : i * 10,
      scale: (1 + i) * 0.02,
    });
  });

  const tl = gsap.timeline({
    ease: "none",
    scrollTrigger: {
      trigger: ".main-container",
      start: "top top",
      end: () =>
        "+=" +
        (document.querySelector(".main-container") as HTMLElement)!
          .offsetHeight *
          1.5,
      toggleActions: "play none reverse pause",
      scrub: true,
      pinSpacing: ".main-container",
      pin: ".main-container",
    },
  });

  const reversecardsArray = cards.slice(1).reverse();
  const firstCard = cards[0] as any;

  tl.fromTo(
    ".article-title",
    {
      stagger: 0.3,
      opacity: 0,
      y: gsap.utils.wrap([-100, 100]),
    },
    {
      stagger: 0.3,
      opacity: 1,
      y: 0,
    }
  )
    .to(".article-section__subtitle h3", {
      immediateRender: false,
      opacity: 1,
      stagger: 0.3,
      y: 0,
    })
    .to(
      cards,
      {
        x: (i) => (i % 2 === 0 ? i * -70 : i * 70),
        scale: (i) => (1 + i) * 0.2,
        duration: 2,
      },
      0
    )
    .to(reversecardsArray, {
      stagger: {
        each: 1,
        ease: "none",
      },
      duration: 4,
      scale: 4,
      x: gsap.utils.wrap([
        `-${
          (document.querySelector(".main-container") as HTMLElement)!
            .offsetWidth
        }`,
        `${
          (document.querySelector(".main-container") as HTMLElement)!
            .offsetWidth
        }`,
      ]),
    })
    .to(reversecardsArray, {
      opacity: 0,
    })
    .to(
      firstCard,
      {
        stagger: 0.6,
        scale: 4,
        ease: "none",
        duration: 2,
      },
      "-=3"
    )
    .to(
      firstCard,
      {
        opacity: 0,
      },
      "-=1"
    )
    .to(
      ".section",
      {
        scale: 2,
        duration: 7,
      },
      2
    )
    .to(
      ".article-section__title",
      {
        y: -100,
        opacity: 0,
      },
      3.5
    );

  // ScrollTrigger.update();
};
