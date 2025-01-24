import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import { Suspense } from "react";

export const metadata = {
  title: "Aura Tattoo ",
  description: "The best tattoo shop in Reykjavik",
};

export default function RootLayout({ children }) {
  return (
    <Suspense>
      <Header />
      <main className="content-wrapper">{children}</main>
      <Footer />
    </Suspense>
  );
}
