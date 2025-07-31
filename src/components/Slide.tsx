"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Slide = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      bgRef.current,
      { width: 0, x: 0 },
      {
        width: "100%",
        duration: 1.2,
        ease: "power2.out",
      }
    );
    tl.to(bgRef.current, {
      x: "100%", // 右へスライド（自身の幅ぶん）
      duration: 1.2,
      ease: "power2.in",
    });
  });

  return (
    <div
      ref={bgRef}
      className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 z-0"
      style={{ width: 0 }}
    />
  );
};

export default Slide;
