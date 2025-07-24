"use client";
import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("");
  return (
    <div
      className="text-center h-screen grid place-items-center bg-black"
      style={{ backgroundColor: color }}
    >
      <div className="bg-white p-[2rem] rounded-[1rem] w-[14rem] shadow-[0_0_1rem_#ddd]">
        <p>{color || "カラーコードを検索"}</p>
        <input type="color" onChange={(e) => setColor(e.target.value)} />
      </div>
    </div>
  );
};

export default ColorPicker;
