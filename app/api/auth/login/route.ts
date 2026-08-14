import { NextRequest, NextResponse } from "next/server";
import { globalApi } from "../../server-config";
import { AxiosError } from "axios";
import { parseCookie } from "cookie";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {
  try {
    const cookieStore = await cookies();
    const body = await req.json();
    const res = await globalApi.post("/auth/login", body);

    const cookieHeaders = res.headers["set-cookie"];

    if (!cookieHeaders) {
      return NextResponse.json("Error Auth");
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

    return NextResponse.json(res.data);
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return NextResponse.json(error.response?.data);
  }
};

// export const POST = async (req: NextRequest) => {
//   const body = await req.json();
//   const res = await globalApi.post("/auth/login", body);
//   return NextResponse.json(res.data, {
//     headers: res.headers as HeadersInit,
//   });
// };
