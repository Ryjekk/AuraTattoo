import H1 from "@components/h1/H1";
import Hero from "@components/hero/Hero";
import Vision from "@components/vision/vision";
export default function Home() {
  return (
    <main className='our-story'>
      <Hero
        content={"# Home Page"}
        backgroundType={"image"}
        backgroundSrc={"/main-bg-img.webp"}
        priority={true}
        mini={true}
        withOverlay={false}
      >
        <H1 white={true}>Our Story</H1>
      </Hero>
      <Vision />
      <section className='section content-center'>
        <h2 className='sr-only'>About Aura Tattoo Studio</h2>

        <h3 className='sr-only'>{`Aura's Origins`}</h3>
        <p>
          {` Aura is a unique place on Reykjavik's tattoo scene, born from the
          vision of artist Anna, known by her pseudonym, Serene Nero (formerly
          Ethereal Tattoo). Driven by a desire for peace and a more intimate
          creative environment, Anna set out on her own path in late 2019. She
          established a small, personal space where she worked solo, inviting
          people into her world of meaningful exchanges, shared stories, and
          authentic connections.`}
        </p>

        <h3 className='sr-only'>Growth and Team Formation</h3>
        <p>
          {` From the beginning, her business showed promise, but it was this step
          toward independence that sparked even more dynamic growth. Soon, the
          idea of inviting other talented artists into her space was born. The
          Aura team isn't just a collection of artists; we are a close-knit
          group of friends who share a deep appreciation for human connection.
          We draw inspiration from our interactions with others, and in return,
          we offer our full attention, creative dedication, and warm care to
          every client, ensuring that their unique needs are met while
          maintaining the highest standards of hygiene.`}
        </p>

        <h3 className='sr-only'>Safety and Hygiene</h3>
        <p>
          {`  Anna's background in the medical field sets a high bar for sterile
          practices within our studio. Every team member shares this commitment
          to safety, so our clients can feel relaxed and confident throughout
          the process.`}
        </p>

        <h3 className='sr-only'>Studio Atmosphere and Accessibility</h3>
        <p>
          Our inclusive, cozy, homelike studio atmosphere, combined with our
          skilled artistic staff, keeps our clients coming back for more than
          just one tattoo. Every design we create is crafted with meticulous
          precision and an unwavering focus on both quality and safety.
          Additionally, Aura is fully accessible, with ramp access and a
          spacious restroom that accommodates wheelchair users.
        </p>

        <h3 className='sr-only'>Our Mission</h3>
        <p>
          We strive to make every visit to our studio a moment of calm. We want
          each person who steps into our atelier to feel seen, relaxed, and
          leave with beautiful memories, along with a meaningful tattoo.
        </p>
      </section>
    </main>
  );
}
