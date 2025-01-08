import Link from "next/link";
import IgWindow from "@components/hero/igWindow/IgWindow";

export default function Hero() {
  return (
    <section className='hero__wrapper'>
      <div className='hero__left'>
        <div className='hero__left-text'>
          <h1 className='headline'>AURA TATTOO</h1>
          <a href='https://maps.app.goo.gl/J9vr6UWEPDW1nowo7' target='_blank'>
            <p>Skipholt 15 , 105 Reykjavik Iceland</p>
          </a>
        </div>
        <div className='hero__left-button'>
          <Link href='/booking' className='tilted-button-wrapper'>
            <span className='tilted-button'>
              Booking
              <span> &#x2197;</span>
            </span>
          </Link>
        </div>
      </div>

      <div className='hero__right'>
        <IgWindow />
      </div>
    </section>
  );
}
