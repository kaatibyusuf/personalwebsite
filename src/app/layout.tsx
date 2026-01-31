import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kaatib Yusuf",
  description: "Personal site of Kaatib Yusuf",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="wrap content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
