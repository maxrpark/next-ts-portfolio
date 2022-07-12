import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const articleAnimation = () => {
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
      // scroller: "#smooth-scroll",
      toggleActions: "play none reverse pause",
      scrub: 0.1,
      pinSpacing: ".main-container",
      markers: true,
      pin: ".main-container",
    },
  });

  const reversecardsArray = cards.slice(1).reverse();
  const firstCard = cards[0] as any;
  tl.fromTo(
    ".article-title",
    {
      stagger: 0.3,
      y: gsap.utils.wrap([-100, 100]),
      opacity: 0,
    },
    {
      stagger: 0.3,
      opacity: 1,
      y: 0,
    }
  )
    .to(
      ".article-section__subtitle h3",
      {
        immediateRender: false,
        opacity: 1,
        stagger: 0.3,
        y: 0,
      }
      // "-=0.1"
    )
    .to(reversecardsArray, {
      // scrub: false,
      stagger: 2,
      scale: 4,
      x: gsap.utils.wrap([-1500, 1500]),
      y: 200,
      transformOrigin: "center center",
      duration: 8,
    })
    .to(reversecardsArray, {
      // stagger: 0.2,
      opacity: 0,
    })
    .to(
      firstCard,
      {
        stagger: 0.6,
        scale: 4,
        opacity: 0,
        duration: 2,
      },
      "-=2"
    )
    .to(
      ".section",
      {
        scale: 2,
        duration: 5,
      },
      2
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

export const articleImageHover = (target: HTMLElement) => {
  if (target.classList.contains("articleImg")) {
    gsap.to(target, {
      scale: 1.3,
      ease: "none",
      rotate: 5,
    });
  } else {
    gsap.to(".articleImg", {
      scale: 1,
      rotate: 0,
      ease: "none",
    });
  }
};
