import GiftCard from "@components/gift-card/GiftCard";
import Hero from "@components/hero/Hero";
import getResidents from "@services/getResidents";
import ResidentsList from "@components/artists/ResidentsList";
import MiniHero from "@components/miniHero/MiniHero";

export default async function Home() {
    const residents = await getResidents();

    return (
        <main>
            <Hero/>
            <MiniHero text='Residents' subText='Book with the best'/>
            <ResidentsList artists={residents}/>
            <GiftCard/>
        </main>
    );
}
