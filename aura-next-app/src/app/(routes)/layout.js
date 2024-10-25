import { Lato, Outfit } from "next/font/google";
import "@styles/main.scss";
// import { Button } from "@components/";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
const title_font = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body_font = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
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
        <main className='content-wrapper'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
