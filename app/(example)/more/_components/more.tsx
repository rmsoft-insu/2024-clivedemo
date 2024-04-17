"use client";

import { useInView } from "react-intersection-observer";
import { useInfiniteQuery, QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, Fragment } from "react";
import Link from "next/link";

export const LoadMoreComponent = () => {
  const { ref, inView } = useInView();

  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: async ({ pageParam }) => {
      const response = await axios.get("/api/projects?cursor=" + pageParam);
      return response.data;
    },
    initialPageParam: 0,
    getPreviousPageParam: (firstPage) => firstPage.priviousId ?? undefined,
    getNextPageParam: (lastPage) => lastPage.nextId ?? undefined,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <div className="h-[400px]">
      <h1>Infinite Loading</h1>
      {status === "pending" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <div>
            <button
              onClick={() => fetchPreviousPage()}
              disabled={!hasPreviousPage || isFetchingPreviousPage}
            >
              {isFetchingPreviousPage
                ? "Loading more..."
                : hasPreviousPage
                ? "Load Older"
                : "Nothing more to load"}
            </button>
          </div>
          {data.pages.map((page) => (
            <Fragment key={page.nextId}>
              {page.data.map((project: any) => (
                <p
                  style={{
                    border: "1px solid gray",
                    borderRadius: "5px",
                    padding: "10rem 1rem",
                    background: `hsla(${project.id * 30}, 60%, 80%, 1)`,
                  }}
                  key={project.id}
                >
                  {project.name}
                </p>
              ))}
            </Fragment>
          ))}
          <div>
            <button
              ref={ref}
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                ? "Load Newer"
                : "Nothing more to load"}
            </button>
          </div>
          <div>
            {isFetching && !isFetchingNextPage
              ? "Background Updating..."
              : null}
          </div>
        </>
      )}
      <hr />
      <Link href="/about">Go to another page</Link>
    </div>
  );
};
