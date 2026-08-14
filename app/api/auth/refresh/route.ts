import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { globalApi } from "../../server-config";
import { parseCookie } from "cookie";

export const POST = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken");
  const refreshToken = cookieStore.get("refreshToken");

  if (accessToken) {
    return NextResponse.json({ success: true });
  }

  if (!refreshToken) {
    return NextResponse.json({ success: false });
  }

  const res = await globalApi.post("/auth/refresh", null, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  const cookieHeaders = res.headers["set-cookie"];

  if (!cookieHeaders) {
    return NextResponse.json({ success: false });
  }

  for (const cookieStr of cookieHeaders) {
    const cookieObj = parseCookie(cookieStr);
    const options = {
      maxAge: Number(cookieObj["Max-Age"]),
      path: cookieObj.Path,
      expires: cookieObj.Expires ? new Date(cookieObj.Expires) : undefined,
    };

    if (cookieObj.refreshToken) {
      cookieStore.set("refreshToken", cookieObj.refreshToken, options);
    }

    if (cookieObj.accessToken) {
      cookieStore.set("accessToken", cookieObj.accessToken, options);
    }
  }

  return NextResponse.json({ success: true });
};
