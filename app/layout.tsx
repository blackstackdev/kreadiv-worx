import type { Metadata, Viewport } from "next";
import "./globals.css";
import { sitePath } from "./lib/site-path";

export const metadata: Metadata = {
  title: {
    default: "Krēˈādiv Worx — Ideas, made visible.",
    template: "%s — Krēˈādiv Worx",
  },
  description:
    "An independent studio building thoughtful, local-first software and useful digital products.",
  icons: {
    icon: sitePath("/brand/production/kradiv-mark.png"),
  },
};

export const viewport: Viewport = {
  themeColor: "#11100E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
