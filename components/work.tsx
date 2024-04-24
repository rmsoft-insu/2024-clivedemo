"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export const WorkButton = () => {
  const router = useRouter();
  return (
    <>
      <Link
        href={{
          pathname: "/work",
          query: {
            name: "insu",
            id: "shine",
            code: "123code",
          },
        }}
      >
        작업하기
      </Link>
    </>
  );
};
