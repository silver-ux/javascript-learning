"use client";
import Loading from "@/components/Loading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Page = () => {
  const times = 12;
  const [loaded, setLoaded] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 3秒後にローディング終了
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    // gsap.fromTo(
    //   mainRef.current,
    //   { opacity: 0, y: 30 },
    //   { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    // );
    gsap.fromTo(
      ".box",
      {
        y: 100,
        opacity: 0,
      },
      { y: 0, stagger: 0.1, opacity: 1 }
    );
  }, [loaded]);
  return (
    <div>
      {!loaded && <Loading />}
      {loaded && (
        <div
          ref={mainRef}
          className="grid gap-[10px] grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]"
        >
          {Array.from({ length: times }).map((_, i) => (
            <div key={i} className="h-[300px]">
              <Image
                src={`/images/img${i + 1}.jpg`}
                width={1920}
                height={1080}
                alt="picture"
                className="w-full h-full object-cover box"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
