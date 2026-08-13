import { NextRequest, NextResponse } from "next/server";
import { globalApi } from "../server-config";

export const GET = async (req: NextRequest) => {
  const params = Object.fromEntries(req.nextUrl.searchParams.entries());
  const res = await globalApi.get("/products", { params });
  return NextResponse.json(res.data);
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const res = await globalApi.post("/products", body);
  return NextResponse.json(res.data);
};
