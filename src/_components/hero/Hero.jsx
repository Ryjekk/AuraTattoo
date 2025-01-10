import IgWindow from "@components/hero/igWindow/IgWindow";
import Image from "next/image";
import Button, { ArrowRight } from "@components/button/Button";

export default function Hero() {
  return (
    <section className="hero__wrapper">
      <div className="hero__left">
        <div className="hero__left-text">
          <h1 className="headline">AURA TATTOO</h1>
          <a href="https://maps.app.goo.gl/J9vr6UWEPDW1nowo7" target="_blank">
            <p>Skipholt 15 , 105 Reykjavik Iceland</p>
          </a>
        </div>
        <div className="hero__left-button">
          <Button link="/booking">
            Booking
            <ArrowRight />
            {/* <Image
              src="/ico/right-arrow.svg"
              alt="arrow-right"
              width={24}
              height={24}
            /> */}
          </Button>
        </div>
      </div>

      <div className="hero__right">
        <Image
          src="/images/hero.webp"
          alt="hero"
          fill
          style={{ objectFit: "cover" }}
          priority
          placeholder="blur"
          blurDataURL="/images/hero.webp"
        />
        <IgWindow />
      </div>
    </section>
  );
}
