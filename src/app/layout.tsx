import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const geistMono = League_Spartan({
  variable: "--font-league-spartan",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "optimus application",
  description: "build using next app!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
