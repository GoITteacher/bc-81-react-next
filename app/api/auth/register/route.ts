import { NextRequest, NextResponse } from "next/server";
import { globalApi } from "../../server-config";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  console.log(body);

  const res = await globalApi.post("/auth/register", body);
  return NextResponse.json(res.data);
};
