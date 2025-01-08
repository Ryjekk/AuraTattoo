import GiftCard from "@components/gift-card/GiftCard";
import Hero from "@components/hero/Hero";
import getResidents from "@services/getResidents";
import ResidentsList from "@components/artists/ResidentsList";

export default async function Home() {
    const residents = await getResidents();

    return (
        <main>
            <Hero/>
            <ResidentsList artists={residents}/>
            <GiftCard/>
        </main>
    );
}
