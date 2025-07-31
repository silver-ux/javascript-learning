"use client";

import Slide from "@/components/Slide";

export default function Page() {
  return (
    <div className="relative w-full h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
      {/* 背景伸びる部分 */}
      <Slide />
      {/* 前面のコンテンツ */}
      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-4xl font-bold">GSAP 背景アニメーション</h1>
        <button className="px-6 py-2 bg-black text-white rounded">
          背景を伸ばす
        </button>
      </div>
    </div>
  );
}
