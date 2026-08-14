import { cookies } from "next/headers";
import { globalApi } from "../../server-config";
import { NextResponse } from "next/server";

export const GET = async () => {
  const cookieStore = await cookies();

  const res = await globalApi.get("/auth/me", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return NextResponse.json(res.data.user);
};
