import { NextRequest, NextResponse } from "next/server";
import { globalApi } from "../../server-config";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const res = await globalApi.post("/auth/register", body);
  return NextResponse.json(res.data);
};
