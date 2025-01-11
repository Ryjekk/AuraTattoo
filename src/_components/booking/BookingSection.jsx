import BookingForm from "./BookingForm";
import Image from "next/image";
import BookingHeader from "./BookingHeader";

export default function BookingSection({ residents, initialArtist }) {
  return (
    <section className='column__section'>
      <div className='column__image-wrapper'>
        <h1 className='booking__title headline'>
          {" "}
          Book Your Tattoo Experience
        </h1>
        <Image
          src='/images/tattoo_in_progress.webp'
          alt='Tattoo in progress'
          fill
          className='column__image'
        />
      </div>
      <div className='column__content'>
        <BookingHeader />
        <BookingForm residents={residents} initialArtist={initialArtist} />
      </div>
    </section>
  );
}
