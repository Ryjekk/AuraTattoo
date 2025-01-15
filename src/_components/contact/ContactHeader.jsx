import Link from "next/link";
export default function ContactHeader() {
  return (
    <header className="column__header column__header--left">
      <h2 className="column__subtitle">Hit us up with more questions</h2>
      <p className="column__text">
        Please note that to schedule an appointment, kindly visit the{" "}
        <Link href="/booking">Booking</Link> section, where you can use the
        booking form to arrange a session with your preferred artist.
      </p>
      <p className="column__text">
        If you wish to purchase a gift card, inquire about joining our team, or
        have any questions unrelated to bookings, please feel free to use this
        form.
      </p>
      <p className="column__text">
        For last minute booking please call the phone:{" "}
        <a className="column__link" href="tel:+3547807819">
          +354 780 7819
        </a>
      </p>
    </header>
  );
}
