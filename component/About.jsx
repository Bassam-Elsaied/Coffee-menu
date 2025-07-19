import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

function about() {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", { type: "words" });

    const scrollTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeLine
      .from(titleSplit.words, {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.02,
        ease: "expo.Out",
      })
      .from(
        ".top-grid div .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          stagger: 0.04,
          ease: "power1.inOut",
        },
        "-=0.5"
      );
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-4">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Drinks</p>
            <h2>
              Where Every Drink Tells a Story{" "}
              <span className="text-white">-</span> from muddle to glass
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="grid-img-2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="grid-img-5" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="grid-img-3" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="grid-img-4" />
        </div>
      </div>
    </div>
  );
}

export default about;
