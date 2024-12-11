import "@styles/main.scss";
import localFont from "next/font/local";

const OrpheusPro = localFont({
  src: "./fonts/OrpheusPro-regular.otf",
  weight: "100 300 400 600",
  variable: "--font-orpheous",
  display: "swap",
});
const AGaramondPro = localFont({
  src: "./fonts/AGaramondPro-Regular.otf",
  weight: "400",
  variable: "--font-garamond",
  display: "swap",
});
export const metadata = {
  title: "Aura Tattoo ",
  description: "The best tattoo shop in Reykjavik",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${OrpheusPro.variable} ${AGaramondPro.variable}`}
    >
      <body className='main-wrapper'>{children}</body>
    </html>
  );
}
