import GiftCard from "@components/gift-card/GiftCard";
import Hero from "@components/hero/Hero";

export default async function Home() {
  return (
    <main>
      <Hero/>
      <GiftCard />
    </main>
  );
}
