import AppHeader from "@/components/AppHeader/AppHeader";
import "./globals.css";
import styles from "./layout.module.css";
import TanStackProvider from "@/components/TanStackProvider";

import { Roboto, Montserrat } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${montserrat.variable}`}>
        <TanStackProvider>
          <div className={styles.shell}>
            <AppHeader />
            <main className={styles.content}>{children}</main>
          </div>
        </TanStackProvider>
      </body>
    </html>
  );
}
