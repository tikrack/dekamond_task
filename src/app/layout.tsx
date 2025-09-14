import type { Metadata } from "next";
import {ReactNode} from "react";
import "@/styles/global.css"
import {Toaster} from "react-hot-toast";

export const metadata: Metadata = {
  title: "Dekamond",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fa" dir={"rtl"}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
