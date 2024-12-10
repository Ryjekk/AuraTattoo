import Button from "@components/button/Button";
import Gallery from "@components/gallery/Gallery";
import GiftCard from "@components/gift-card/GiftCard";
import Hero from "@components/hero/Hero";
import getInstagramSnaps from "@services/getInstagramSnaps";

export default async function Home() {
  const instagramSnaps = await getInstagramSnaps();

  return (
    <main>
      <Hero
        backgroundType={"image"}
        backgroundSrc={"/main-bg-img.jpeg"}
        withOverlay={true}
      >
        <p>
          Aura Reykjavik is a contemporary tattoo studio situated in the heart
          of Reykjavik, Iceland. The studio prides itself on providing a
          welcoming and professional atmosphere. We are highly regarded for our
          unwavering commitment to quality and excellence, along with a
          personalized customer experience tailored for everyone seeking unique,
          custom tattoos in a serene and soothing environment.
        </p>
        <p>
          To book a tattoo appointment, please contact our artists directly,
          ensuring that your journey from concept to creation is seamless and
          tailored to your needs.
        </p>
        <Button link='/contact' text='Contact Us' color='white'>
          Artists
        </Button>
      </Hero>
      {/* <Hero
        content={"# Home Page"}
        backgroundType={"video"}
        backgroundSrc={"video-mini.mp4"}
      >
        <p>
          Aura Reykjavik is a contemporary tattoo studio situated in the heart
          of Reykjavik, Iceland. The studio prides itself on providing a
          welcoming and professional atmosphere. We are highly regarded for our
          unwavering commitment to quality and excellence, along with a
          personalized customer experience tailored for everyone seeking unique,
          custom tattoos in a serene and soothing environment.
        </p>
        <p>
          To book a tattoo appointment, please contact our artists directly,
          ensuring that your journey from concept to creation is seamless and
          tailored to your needs.
        </p>
        <Button link='/contact' text='Contact Us'>
          Artists
        </Button>
      </Hero> */}
      <Gallery instagramSnaps={instagramSnaps} />
      <GiftCard />
    </main>
  );
}
