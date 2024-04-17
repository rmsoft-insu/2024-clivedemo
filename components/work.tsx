"use client";

import { useRouter } from "next/navigation";

export const WorkButton = () => {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.replace("/work")}>작업하기버튼</button>
    </>
  );
};
