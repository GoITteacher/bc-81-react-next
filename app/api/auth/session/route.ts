import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { globalApi } from "../../globalApi";
import { parseCookie } from "cookie";
import { AxiosError } from "axios";

export const POST = async (request: NextRequest) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken");
  const refreshToken = cookieStore.get("refreshToken");

  if (accessToken) {
    return NextResponse.json({ success: true });
  }

  if (!refreshToken) {
    return NextResponse.json({ success: false });
  }

  try {
    const res = await globalApi.post("/auth/refresh", {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });
    const setCookies = res.headers["set-cookie"];

    if (setCookies) {
      const cookieArr = Array.isArray(setCookies) ? setCookies : [setCookies];

      for (const cookie of cookieArr) {
        const parsedCookie = parseCookie(cookie);

        const options = {
          expires: parsedCookie.Expires
            ? new Date(parsedCookie.Expires)
            : undefined,
          path: parsedCookie.Path,
          maxAge: Number(parsedCookie["Max-Age"]),
        };

        if (parsedCookie.accessToken) {
          cookieStore.set("accessToken", parsedCookie.accessToken, options);
        }

        if (parsedCookie.refreshToken) {
          cookieStore.set("refreshToken", parsedCookie.refreshToken, options);
        }
      }

      return NextResponse.json({ sucess: true });
    }

    return NextResponse.json({ succes: false });
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    console.log(error.response?.data);

    return NextResponse.json(
      {
        error: error.response?.data.message || error.message,
      },
      {
        status: error.status,
      }
    );
  }
};
