import { NextRequest, NextResponse } from "next/server";

export async function GET(request: any, response: any) {
  const cursor = parseInt(request.query.cursor || 0);
  const pageSize = 5;

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

  setTimeout(() => response.json({ data, nextId, previousId }), 1000);
}
