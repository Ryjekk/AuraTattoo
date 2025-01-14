import Vision from "@components/vision/vision";
import MiniHero from "@components/miniHero/MiniHero";
import Section from "@components/section/Section";
import Image from "next/image";
export default function Home() {
  return (
    <main className="our-story">
      <MiniHero
        text="Our Story"
        subText="AuraTattoo in a nutshell"
        image="/images/main-bg-img.webp"
        white={true}
        blurURL={
          "data:image/png;base64,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"
        }
      />
      <Vision
        text="At Aura, we believe in creating meaningful connections through the art
          of tattooing. Our goal is to offer a peaceful, intimate space where
          every client feels seen, cared for, and inspired. We combine
          creativity with exceptional hygiene standards to ensure a safe and
          unforgettable experience, crafting custom designs that reflect the
          personal stories of those who who walk through our doors."
      />
      <div className="our-story__wrapper">
        <div>
          <Section cls=" content-center our-story__about">
            <h2 className="sr-only">About Aura Tattoo Studio</h2>

            <h3 className="sr-only">{`Aura's Origins`}</h3>
            <p>
              {` Aura is a unique place on Reykjavik's tattoo scene, born from the
          vision of artist Anna, known by her pseudonym, Serene Nero (formerly
          Ethereal Tattoo). Driven by a desire for peace and a more intimate
          creative environment, Anna set out on her own path in late 2019. She
          established a small, personal space where she worked solo, inviting
          people into her world of meaningful exchanges, shared stories, and
          authentic connections.`}
            </p>
          </Section>
          <Section cls=" content-center our-story__about">
            <h3 className="sr-only">Growth and Team Formation</h3>
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
          </Section>
        </div>
        <div className="our-story__image-wrapper">
          <Image
            src="/images/aura_interior_office.webp"
            alt="Aura Tattoo Studio interior"
            className="our-story__image"
            placeholder="blur"
            blurDataURL="data:image/png;base64,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"
            fill
          />
        </div>
      </div>
      <div className="our-story__wrapper">
        <div className="our-story__image-wrapper">
          <Image
            src="/images/aura_interior_cosy_corner.webp"
            alt="Aura Tattoo Studio interior"
            className="our-story__image our-story__image-second"
            placeholder="blur"
            blurDataURL="data:image/png;base64,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"
            fill
          />
        </div>
        <div>
          <Section cls=" content-center our-story__about" fromRight={true}>
            <h3 className="sr-only">Safety and Hygiene</h3>
            <p>
              {`  Anna's background in the medical field sets a high bar for sterile
          practices within our studio. Every team member shares this commitment
          to safety, so our clients can feel relaxed and confident throughout
          the process.`}
            </p>
          </Section>
          <Section cls=" content-center our-story__about" fromRight={true}>
            <h3 className="sr-only">Studio Atmosphere and Accessibility </h3>
            <p>
              Our inclusive, cozy, homelike studio atmosphere, combined with our
              skilled artistic staff, keeps our clients coming back for more
              than just one tattoo. Every design we create is crafted with
              meticulous precision and an unwavering focus on both quality and
              safety. Additionally, Aura is fully accessible, with ramp access
              and a spacious restroom that accommodates wheelchair users.
            </p>
          </Section>
          <Section cls=" content-center our-story__about" fromRight={true}>
            <h3 className="sr-only">Our Mission</h3>
            <p>
              We strive to make every visit to our studio a moment of calm. We
              want each person who steps into our atelier to feel seen, relaxed,
              and leave with beautiful memories, along with a meaningful tattoo.
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}
