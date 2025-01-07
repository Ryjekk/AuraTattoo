import Link from "next/link";
import IgWindow from "@components/hero/igWindow/IgWindow";

export default function Hero() {
    return (
        <section className='hero__wrapper'>
            <div className='hero__left'>
                <div className='hero__left-text'>
                    <h1 className='headline'>AURA TATTOO</h1>
                    <p>Skipholt 15 , 105 Reykjavik Iceland</p>
                </div>
                <div className='hero__left-button'>
                    <Link href='/booking' className='tilted-button-wrapper'>
                    <span className='tilted-button'>Booking
                        <span> &#x2197;</span>
                    </span>
                    </Link>
                </div>
            </div>

            <div className='hero__right'>
                <IgWindow/>
            </div>
        </section>
    );
}
