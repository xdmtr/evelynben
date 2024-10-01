import { Italianno } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pinky: "#C64474",
        babypinky: "rgba(229, 143, 172, 1)",
        browny: "#A69A92",
        darkBrowny: "#8E8077"
      },
      screens: {
        smx: "450px",
        smol: "400px",
      },
      fontFamily: {
        Italianno: "var(--font-italianno)",
        playfair: "var(--font-playfair)",
        cinzel: "var(--font-cinzel)",
        poppins: "var(--font-poppins)",
        bodoni: "var(--font-bodoni-mod)",
        ebGaramond: "var(--font-eb-garamond)",
        questrial: "var(--font-questrial)",
        caramel: "var(--font-caramel)"
      },
      backgroundImage: {
        'brown-gradient': 'linear-gradient(to bottom,  rgba(137, 122, 116, 0), rgba(137, 122, 116, 0.8), rgba(137, 122, 116, 1))',
        'brown-gradient-gallery': 'linear-gradient(to bottom, rgba(137, 122, 116, 0), rgba(186,161,146, 0.0), rgba(186,161,146, 0), rgba(144,115,99, 0.8), #907363)',
        
        'bg-brown-gradient': 'linear-gradient(to bottom, rgba(142, 128, 119, 0.9), rgba(166, 154, 146, 0.9))',
        'brown-gradient-tu': 'linear-gradient(to top,  rgba(137, 122, 116, 0), rgba(137, 122, 116, 0.8), rgba(137, 122, 116, 1))',
        'brown-gradient-tr': 'linear-gradient(to right, rgba(132, 118, 107, 0.5), rgba(142, 128, 119, 0.5), rgba(149, 134, 125, 0.5), rgba(151, 136, 128, 0.5), rgba(166, 154, 146, 0.5))',
        'pink-gradient-tb': 'linear-gradient(to bottom, rgba(102, 102, 102, 0), rgba(198, 98, 116, 1))',
        'babypink-gradient-tb': 'linear-gradient(to bottom, rgba(102, 102, 102, 0), rgba(102, 102, 102, 0.4),  rgba(198, 98, 116, 1))',
        'babypink-gradient-tu': 'linear-gradient(to top, rgba(102, 102, 102, 0),  #D1878C)',
        'pink-gradient-tu': 'linear-gradient(to top, rgba(102, 102, 102, 0), rgba(115, 108, 111, 0.69), rgba(198, 98, 116, 1))',
        'pink-to-babypink': 'linear-gradient(to bottom, #C97D83, #D38783)',
        'polaadat': ' linear-gradient(to bottom,  rgba(137, 122, 116, 0), rgba(137, 122, 116, 0.8), rgba(137, 122, 116, 1), rgba(137, 122, 116, 1)),url(/patangkerapapola.webp)',
        'polaadat-tu': ' linear-gradient(to top,  rgba(137, 122, 116, 0), rgba(186,161,146, 0.0), rgba(186,161,146, 0), rgba(186,161,146, 0.9), #BAA191), linear-gradient(to bottom,  rgba(137, 122, 116, 0), rgba(137, 122, 116, 0), rgba(137, 122, 116, 0.9), rgba(137, 122, 116, 1)),url(/patangkerapapola.webp)',
        'polaadatpink-tu': 'linear-gradient(to top, rgba(137, 122, 116, 0), rgba(186,161,146, 0.0), rgba(186,161,146, 0), rgba(144,115,99, 0.8), #907363), linear-gradient(to bottom,  rgba(137, 122, 116, 0), rgba(186,161,146, 0.0), rgba(186,161,146, 0), rgba(144,115,99, 0.8), #907363), url(/patangkerapapola.webp)',
      },
    },
  },
  plugins: [],
};
export default config;
