"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Page = () => {
  const headRef = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.to(headRef.current, {
      keyframes: [
        {
          borderRadius: "20% 50% 50% 70% / 50% 50% 70% 50%",
          duration: 1,
        },
        {
          borderRadius: "50% 20% 50% 50% / 40% 40% 60% 60%",
          duration: 1,
        },
        {
          borderRadius: "50% 40% 20% 40% / 40% 50% 50% 80%",
          duration: 1,
        },
        {
          borderRadius: "50% 50% 50% 20% / 40% 40% 60% 60%",
          duration: 1,
        },
      ],
      repeat: -1,
      yoyo: true,
      ease: "none",
    });
  });
  return (
    <div className="text-center">
      <h1
        ref={headRef}
        className="bg-[#0bd] text-white inline-block p-[6rem_3rem] rounded-full"
      >
        Javascriptアニメーション
      </h1>
    </div>
  );
};

export default Page;
