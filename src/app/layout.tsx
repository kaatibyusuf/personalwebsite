import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaatib Yusuf",
  description: "Personal website of Kaatib Yusuf",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
