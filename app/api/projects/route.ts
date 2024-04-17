import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  const cursor = parseInt(request.nextUrl.searchParams.get("cursor") ?? "0");
  const pageSize = 5;

  console.log("cursor", cursor);

  const data = Array(pageSize)
    .fill(0)
    .map((_, i) => {
      return {
        id: cursor + i,
        name: `User ${cursor + i}`,
      };
    });

  const nextId = cursor < 10 ? data[data.length - 1].id + 1 : null;
  const previousId = cursor > -10 ? data[0].id - pageSize : null;

  return new NextResponse(JSON.stringify({ data, nextId, previousId }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
