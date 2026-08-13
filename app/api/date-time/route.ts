import { NextResponse } from "next/server";

export const GET = () => {
  const date = new Date();

  return NextResponse.json({
    dateTime: date.toLocaleString(),
  });
};
