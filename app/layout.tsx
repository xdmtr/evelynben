import type { Metadata } from "next";
import "./globals.css";
import {Italianno, Cinzel, Poppins, EB_Garamond, Caramel, Questrial, Playfair_Display} from "next/font/google";

const italianno = Italianno({
  subsets: ["latin"],
  variable: "--font-italianno",
  weight: "400",
  display: "swap"
});
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400","500","600","700","800"],
  display: "swap"
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: [ "400","500","600","700","800" ],
  display: "swap"
})

const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  weight: ["400","500","600","700","800"],
  display: "swap"
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400","500","600","700","800"],
  display: "swap"
});
const caramel = Caramel({
  subsets: ["latin"],
  variable: "--font-caramel",
  weight: ["400"],
  display: "swap"
});
const questrial = Questrial({
  subsets: ["latin"],
  variable: "--font-questrial",
  weight: ["400"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "The Wedding",
  description: "Wedding of Evelyn & Benhard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${caramel.variable} ${cinzel.variable} ${italianno.variable} ${eb_garamond.variable} ${questrial.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
