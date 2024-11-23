import TwoColumnLayout from "@components/shared/twoColumnLayout/TwoColumnLayout";
import Button from "@components/button/Button";
import Image from "next/image";
export default function GiftCard() {
  return (
    <div className='section section__gift-card'>
      <TwoColumnLayout
        id='gift-card'
        leftColumn={
          <Image
            src='/aura-logo.jpg'
            alt='Aura Logo'
            width={390}
            height={480}
          />
        }
        rightColumn={
          <div className='two-column__column'>
            <h2>Gift Card Certificate</h2>
            <p>
              Gift cards are printed on high-quality paper, offering a stylish
              and thoughtful gifting option for any occasion. Their premium
              material enhances presentation, making a lasting impression for
              birthdays, holidays, or special events. Each card comes carefully
              packed in an organic paper envelope tied with a ribbon of your
              choice (off white, sage green, muted pink). Pick them up at the
              studio after contacting your chosen artist in advance. Tattoos can
              be gifted at any desired price.
            </p>
            <Button link='/contact'>Purchase a Gift Card</Button>
          </div>
        }
      />
    </div>
  );
}
