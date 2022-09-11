import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollingAnimation = (type: string) => {
  const sections = gsap.utils.toArray(`.${type}`);

  sections.forEach((singleSection) => {
    const cards = (singleSection as HTMLDivElement).querySelector(
      ".section__cards"
    )!;
    const card = (singleSection as HTMLDivElement).querySelector(
      ".section__card"
    )!;
    let tl;
    let endAni: string;

    if (type === "from-right") {
      endAni = `+=${cards.scrollWidth - (card as HTMLDivElement).offsetWidth}`;
      tl = gsap.timeline().to(cards, {
        x: () => {
          return -cards.scrollWidth + (card as HTMLDivElement).offsetWidth;
        },
      });
    } else if (type === "from-left") {
      endAni = `+=${cards.scrollWidth + (card as HTMLDivElement).offsetWidth}`;
      tl = gsap.timeline().to(cards, {
        x: () => {
          return cards.scrollWidth + (card as HTMLDivElement).offsetWidth;
        },
      });
    }

    ScrollTrigger.create({
      trigger: singleSection as HTMLElement,
      start: () => "center center",
      end: () => endAni,
      scrub: true,
      pin: true,
      pinSpacing: true,
      invalidateOnRefresh: true,
      anticipatePin: 1,
      animation: tl,
    });
  });
};

export default HorizontalScrollingAnimation;
