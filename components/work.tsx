"use client";

import { useRouter } from "next/navigation";

export const WorkButton = () => {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => router.replace("/work?name=insu&id=shine&code=123code")}
      >
        작업하기
      </button>
    </>
  );
};
