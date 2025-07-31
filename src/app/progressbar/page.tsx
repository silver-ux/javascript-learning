"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";

const Page = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".picture",
      {
        opacity: 0,
        y: 40,
      },
      {
        scrollTrigger: {
          trigger: ".picture",
          start: "top bottom",
          toggleActions: "play reset play reset",
        },
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
      }
    );
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      gsap.to(progressRef.current, {
        width: `${scrollPercent}%`,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  });
  return (
    <div className="max-w-[1000px] w-full mx-auto p-[5%]">
      <div
        ref={progressRef}
        className="fixed top-0 right-0 h-1 left-0 bg-[#0bd]"
        style={{ width: "0%" }}
      ></div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <div className="w-full h-[300px] picture">
        <Image
          src={"/images/img4.jpg"}
          width={1920}
          height={1080}
          alt="picture"
          className="w-full h-full object-cover"
        />
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        dolores illo exercitationem recusandae cumque dolorem id velit
        voluptates quasi enim impedit, quidem, saepe architecto eum maiores?
        Reprehenderit id sapiente iusto.
      </p>
    </div>
  );
};

export default Page;
