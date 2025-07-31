"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type Props = {
  onComplete: () => void;
};

const LoadingScreen = ({ onComplete }: Props) => {
  const greyRef = useRef<HTMLDivElement>(null);
  const greenRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ onComplete });

    // テキストフェードアウト（途中で）
    tl.to(textRef.current, {
      opacity: 0,
      duration: 1.2,
      delay: 0.8,
      ease: "power1.out",
    });

    // グレー背景フェードアウト
    tl.to(
      greyRef.current,
      {
        opacity: 0,
        duration: 2,
        ease: "power1.out",
      },
      "<" // ← 同時に開始
    );

    // 薄緑背景：下から上にスライド
    tl.fromTo(
      greenRef.current,
      { y: "100%" },
      {
        y: "-100%",
        duration: 2,
        ease: "power2.inOut",
      },
      "<0.2" // ← 少し遅れて開始
    );
  }, []);

  return (
    <>
      {/* グレー背景 */}
      <div
        ref={greyRef}
        className="fixed inset-0 bg-gray-800 z-50 flex items-center justify-center"
      >
        <p ref={textRef} className="text-white text-3xl font-bold">
          Loading...
        </p>
      </div>

      {/* 薄緑背景 */}
      <div ref={greenRef} className="fixed inset-0 bg-green-200 z-40" />
    </>
  );
};

export default LoadingScreen;
