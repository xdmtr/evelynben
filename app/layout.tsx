import type { Metadata } from "next";
import "./globals.css";
import {Italianno, Cinzel, Poppins, Bodoni_Moda, EB_Garamond, Caramel, Questrial, Playfair_Display} from "next/font/google";

const italianno = Italianno({
  subsets: ["latin"],
  variable: "--font-italianno",
  weight: "400",
});
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400","500","600","700","800"],
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: [ "400","500","600","700","800" ],
})
const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-mod",
  weight: ["400","500","600","700","800"],
});
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  weight: ["400","500","600","700","800"],
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400","500","600","700","800"],
});
const caramel = Caramel({
  subsets: ["latin"],
  variable: "--font-caramel",
  weight: ["400"],
});
const questrial = Questrial({
  subsets: ["latin"],
  variable: "--font-questrial",
  weight: ["400"],
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
        className={`${poppins.variable} ${caramel.variable} ${cinzel.variable} ${italianno.variable} ${bodoni_moda.variable} ${eb_garamond.variable} ${questrial.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
