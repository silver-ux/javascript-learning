"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const Loading = () => {
  gsap.registerPlugin(useGSAP);

  const container = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [percent, setPercent] = useState(0);

  useGSAP(() => {
    const obj = { value: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        // フェードアウト終了後に表示を消してから親に通知
        setTimeout(() => {
          setVisible(false);
        }, 500);
      },
    });

    tl.to(obj, {
      value: 100,
      duration: 3,
      ease: "power1.out",
      onUpdate: () => {
        setPercent(Math.floor(obj.value));
      },
    });

    tl.to(
      progressRef.current,
      {
        width: "100%",
        duration: 3,
        ease: "power1.out",
      },
      "<"
    );

    tl.to(container.current, {
      opacity: 0,
      duration: 0.5,
    });
  }, []);

  if (!visible) return null;
  return (
    <div
      ref={container}
      className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center gap-4"
    >
      <div className="w-64 h-2 bg-gray-700 rounded overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-green-500"
          style={{ width: "0%" }}
        />
      </div>
      <p className="text-xl font-mono">{percent}%</p>
    </div>
  );
};

export default Loading;
