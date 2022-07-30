import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { createContext, useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export const SmoothScrollContext = createContext({
  scroll: null,
});

export const SmoothScrollProvider = ({ children }) => {
  const [scroll, setScroll] = useState(null);
  const scrollWrapper = useRef();

  useEffect(() => {
    if (!scroll) {
      (async () => {
        try {
          const LocomotiveScroll = (await import("locomotive-scroll")).default;

          setScroll(
            new LocomotiveScroll({
              el: scrollWrapper.current,
              smooth: true,
              lerp: 0.08,
            })
          );

          const locoScroll = new LocomotiveScroll({
            el: scrollWrapper.current,
            smooth: true,
            lerp: 0.1,
          });

          locoScroll.on("scroll", ScrollTrigger.update);

          ScrollTrigger.scrollerProxy(scrollWrapper.current, {
            scrollTop(value) {
              return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
            },

            getBoundingClientRect() {
              return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
              };
            },

            pinType: scrollWrapper.current.style.transform
              ? "transform"
              : "fixed",
          });

          ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

          locoScroll.update();
        } catch (error) {
          throw Error(`[SmoothScrollProvider]: ${error}`);
        }
      })();
    }
    // }, 100);
    return () => {
      // tslint:disable-next-line:no-unused-expression
      scroll && scroll.destroy();
    };
  }, [scroll]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <SmoothScrollContext.Provider value={{ scroll }}>
      <div id='smooth-scroll' data-scroll-container ref={scrollWrapper}>
        {children}
      </div>
    </SmoothScrollContext.Provider>
  );
};
