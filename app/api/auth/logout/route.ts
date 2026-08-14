import { cookies } from "next/headers";
import { globalApi } from "../../server-config";
import { NextResponse } from "next/server";

export const POST = async () => {
  const cookieStore = await cookies();

  const res = await globalApi.post("/auth/logout", null, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");

  return NextResponse.json({ success: true });
};
