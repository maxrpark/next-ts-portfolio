import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HorizontalScollingAnimation = (type: string) => {
  gsap.utils.toArray(`.${type}`).forEach((section) => {
    const cards = (section as HTMLDivElement).querySelector(".section__cards")!;
    const card = (section as HTMLDivElement).querySelector(".section__card")!;
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
      trigger: section as any,
      start: () => "center center",
      scroller: "#smooth-scroll",
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

export default HorizontalScollingAnimation;
