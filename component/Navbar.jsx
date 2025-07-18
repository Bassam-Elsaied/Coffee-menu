"use client";

import { navLinks } from "@/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <nav>
      <div>
        <Link href="/" className="flex items-center gap-2">
          <Image src={"/images/logo.png"} alt="logo" height={45} width={45} />
          <p>Coffe</p>
        </Link>

        <ul>
          {navLinks.map((link) => (
            <li key={link.title}>
              <a href={`#${link.URL}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
