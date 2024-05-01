import type { Metadata } from "next";
import "./globals.css";
import { HeaderProvider } from "@/providers/Header-provider";
import { Aura } from "@/components/MainPage/Aura";

export const metadata: Metadata = {
  title: "Artem Khmaruk",
  description: "Да,я",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Aura />
        <HeaderProvider />
        {children}
      </body>
    </html>
  );
}
