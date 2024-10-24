import { Yeseva_One, Josefin_Sans } from "next/font/google";
import "@styles/main.scss";
// import { Button } from "@components/";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
const title_font = Yeseva_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
  display: "swap",
});

const body_font = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-body",
  display: "swap",
});
export const metadata = {
  title: "Aura Tattoo ",
  description: "The best tattoo shop in Reykjavik",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${title_font.variable} ${body_font.variable}`}>
      <body className='main-wrapper'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
