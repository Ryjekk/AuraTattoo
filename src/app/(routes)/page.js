import GiftCard from "@components/gift-card/GiftCard";
import Hero from "@components/hero/Hero";
import getResidents from "@services/getResidents";
import ResidentsList from "@components/artists/ResidentsList";
import MiniHero from "@components/miniHero/MiniHero";
import Vision from "@components/vision/vision";

export default async function Home() {
  const residents = await getResidents();

  return (
    <main className="home">
      <Hero />
      <Vision
        text="Aura Reykjavik is a contemporary tattoo studio situated in the heart of Reykjavik, Iceland. The studio prides itself on providing a welcoming and professional atmosphere. We are highly regarded for our unwavering commitment to quality and excellence, along with a personalized customer experience tailored for everyone seeking unique, custom tattoos in a serene and soothing environment."
        subText="To book a tattoo appointment, please contact our artists directly, ensuring that your journey from concept to creation is seamless and tailored to your needs."
      />
      <MiniHero
        text="Residents"
        subText="Book with the best"
        id="residents"
        main={false}
      />
      <ResidentsList artists={residents} />
      <GiftCard />
    </main>
  );
}
