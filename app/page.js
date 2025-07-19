"use client";

import Cocktails from "@/component/Cocktails";
import About from "@/component/About";
import Hero from "@/component/Hero";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <main>
      <Hero />
      <Cocktails />
      <About />
    </main>
  );
}
