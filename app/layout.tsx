import type { Metadata } from "next";
import { sofia } from "./fonts";
import "./globals.css";
import Header from "./components/headers/Header";
import Footer from "./components/footer/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TheRabbi",
  description: "The Rabbi Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sofia.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}