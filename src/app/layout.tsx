import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mike Masoni | Photography & Videography",
  description:
    "Modern luxury portfolio of Mike Masoni featuring editorial photography, cinematic video, and creative direction.",
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
