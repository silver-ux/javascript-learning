"use client";
import LoadingScreen from "@/components/fashion/Loading";
import { useState } from "react";

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <main
        className={`${
          loaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-700`}
      >
        <h1 className="text-4xl p-10">ようこそ！</h1>
        <p className="text-gray-600">ここに本コンテンツが表示されます。</p>
      </main>
    </>
  );
}
