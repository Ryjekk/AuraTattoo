import BookingForm from "./BookingForm";
import Image from "next/image";
import BookingHeader from "./BookingHeader";

export default function BookingSection({ residents, initialArtist }) {
  return (
    <section className="column__section">
      <div className="column__image-wrapper">
        <h1 className="booking__title headline">
          {" "}
          Book Your Tattoo Experience
        </h1>
        <Image
          src="/images/tattoo_in_progress.webp"
          alt="Tattoo in progress"
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,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"
          className="column__image"
        />
      </div>
      <div className="column__content">
        <BookingHeader />
        <BookingForm residents={residents} initialArtist={initialArtist} />
      </div>
    </section>
  );
}
