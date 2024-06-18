import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";
import data from "./data";

const inter = Montserrat({ subsets: ["latin"],
  weight: ["100","300","400","500","600","700","800","900"]
 });

export const metadata: Metadata = {
  title: `${data.brand}`,
  description: `${data.brand} connects you with the top rated local Surgeons providing hernia procedures, hernia treatments, hernia surgeries.`,
  icons: {
    icon: data.logo, 
    apple: data.logo,
    shortcut: data.logo,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
