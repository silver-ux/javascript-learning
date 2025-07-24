"use client";
import React, { useState } from "react";

const Page = () => {
  const [boolean, setBoolean] = useState(true);
  const [text, setText] = useState(0);
  const [check, setCheck] = useState(false);
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
        <div className="mt-10 text-center">
          <textarea
            className="border w-full"
            onChange={(e) => setText(e.target.value.length)}
          />
          <p>100文字以内で入力してください</p>
          <p>
            現在
            <span className={`text-2xl ${text > 100 ? "text-red-500" : ""}`}>
              {text}
            </span>
            文字
          </p>
        </div>
        <div className="text-center">
          <label className="block">
            <input
              type="checkbox"
              onChange={(e) => setCheck(e.target.checked)}
            />
            利用規約に同意する
          </label>
          <button
            disabled={!check}
            className="bg-[#0bd] p-[.75rem_1rem] disabled:bg-[#ccc]"
          >
            送信する
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
