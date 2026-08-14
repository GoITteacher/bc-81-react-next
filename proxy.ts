import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { checkServerSession } from "./lib/serverApi";
import { parseCookie } from "cookie";
import { nextApi } from "./lib/nextApi";

// const privateRoutes = ["/tasks", "/news", "/notes"];

// export async function proxy(request: NextRequest) {
//   const cookieStore = await cookies();
//   const accessToken = cookieStore.get("accessToken");
//   const refreshToken = cookieStore.get("refreshToken");

//   const { pathname } = request.nextUrl; // /tasks/details/25

//   const isPrivateRoute = privateRoutes.some((path) =>
//     pathname.startsWith(path)
//   );

//   // Якщо публічний маршрут - довзволяємо завантажити цю сторінку
//   if (!isPrivateRoute) {
//     return NextResponse.next();
//   }

//   // Якщо є accessToken - довзволяємо завантажити цю сторінку
//   if (accessToken) {
//     return NextResponse.next();
//   }

//   // if (refreshToken) {
//   //   try {
//   //     const res = await nextApi.post("/auth/refresh", null, {
//   //       headers: {
//   //         Cookie: cookieStore.toString(),
//   //       },
//   //     });

//   //     const setCookies = res.headers["set-cookie"];

//   //     if (setCookies) {
//   //       const cookieArr = Array.isArray(setCookies) ? setCookies : [setCookies];

//   //       for (const cookie of cookieArr) {
//   //         const parsedCookie = parseCookie(cookie);

//   //         const options = {
//   //           expires: parsedCookie.Expires
//   //             ? new Date(parsedCookie.Expires)
//   //             : undefined,
//   //           path: parsedCookie.Path,
//   //           maxAge: Number(parsedCookie["Max-Age"]),
//   //         };

//   //         if (parsedCookie.accessToken) {
//   //           cookieStore.set("accessToken", parsedCookie.accessToken, options);
//   //         }

//   //         if (parsedCookie.refreshToken) {
//   //           cookieStore.set("refreshToken", parsedCookie.refreshToken, options);
//   //         }
//   //       }

//   //       // після отримання нових токенів, всеодно даємл дозвіл на завантаження сторінки
//   //       return NextResponse.next({
//   //         headers: {
//   //           Cookie: cookieStore.toString(),
//   //         },
//   //       });
//   //     }
//   //   } catch (err) {
//   //     console.log("ERROR", err);
//   //   }
//   // }

//   return NextResponse.redirect(new URL("/sign-in", request.url));
// }

// export const config = {
//   matcher: ["/tasks/:pa", "/news", "/notes"],
// };

//!=========================================

const privateRoutes = ["/test", "/tasks", "/notes", "/news"];

export const proxy = async (req: NextRequest) => {
  const path = req.nextUrl.pathname;

  const isPrivateRoute = privateRoutes.includes(path);

  if (!isPrivateRoute) {
    return NextResponse.next();
  }

  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken");

  if (!refreshToken) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
};
