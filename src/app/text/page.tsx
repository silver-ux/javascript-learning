"use client";
import React, { useState } from "react";

const Page = () => {
  const [boolean, setBoolean] = useState(true);
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundColor: boolean ? "#fff" : "#000",
        color: boolean ? "#000" : "#fff",
      }}
    >
      <div className="max-w-[1000px] mx-auto w-full p-10">
        <button onClick={() => setBoolean(!boolean)}>
          {boolean ? "ダークモードにする" : "ライトモードにする"}
        </button>
        <h1 className="font-bold text-5xl">Hello</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ex nisi
          sapiente quo consequatur? Minima repellat minus aliquid laudantium
          doloremque temporibus necessitatibus? Non eveniet molestias nulla
          iure, ad impedit error! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eos delectus quod, est incidunt omnis nam porro
          nesciunt expedita asperiores a aut corrupti ducimus ut minima!
          Pariatur eveniet autem sit quidem.
        </p>
      </div>
    </div>
  );
};

export default Page;
