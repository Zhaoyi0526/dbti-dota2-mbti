import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DBTI · Dota2 Behavioral Type Indicator",
  description:
    "基于 Dota 2 7.41C 对局行为的 25 题人格测试，解码你的刀狗人格类型。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
