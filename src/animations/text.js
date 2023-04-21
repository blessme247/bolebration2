//Animation for NotFound texts and button

import Splitting from "splitting";
import { IO } from "./observe";
import { gsap, Power3 } from "gsap";

export const split = () => {
  const heroText = document.querySelectorAll(".heroBottom")
//   console.log(p)
//   const p = document.querySelectorAll(".middleText");
//   const d = document.querySelectorAll(".bottomText");
//   const btn = document.querySelector(".redirectLink404")


heroText.forEach((item) => {
    Splitting({
      target: item,
      by: "chars",
    });
    gsap.set(item.querySelectorAll(".char"), {
      yPercent: 100,
      transformStyle: "preserve-3d",
    });
    IO(item, {
      threshold: 1,
    }).then(() => {
      const elem = item.querySelectorAll(".char");
      gsap.to(elem, {
        opacity: 1,
        css: {visibility: "visible"},
        yPercent: 0,
        delay: 0.5,
        stagger: elem.length > 100 ? 0.03 : 0.04,
        duration: elem.length > 100 ? 0.6 : 0.7,
        ease: "easeOut",
        transformStyle: "preserve-3d",
      });
    });
  });

 
};
