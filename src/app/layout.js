import "@styles/main.scss";
import localFont from "next/font/local";
import { Lato, Josefin_Sans } from "next/font/google";
const OrpheusPro = localFont({
  src: "./fonts/OrpheusPro-regular.otf",
  weight: "100 300 400 600",
  variable: "--font-orpheous",
  display: "swap",
});
const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});
const play = Josefin_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Aura Tattoo ",
  description: "The best tattoo shop in Reykjavik",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${OrpheusPro.variable} ${lato.variable} ${play.variable}`}
    >
      <body className="main-wrapper">{children}</body>
    </html>
  );
}
