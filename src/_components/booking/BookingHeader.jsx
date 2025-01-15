import Link from "next/link";
export default function BookingHeader() {
  return (
    <header className="column__header">
      <h2 className="column__subtitle">Transform Your Ideas into Ink</h2>
      <p className="column__text">
        We are appointment only and do not take walk-ins for tattoos. Please
        make sure that you book your tattoo session in advance.
      </p>
      <p className="column__text">
        All fields are mandatory. Please note: this form is for our in-house
        team only. For guest artists, reach out via their instagram.
      </p>
      <p className="column__text">
        For more information about how we operate and to access useful insights,
        please refer to our <Link href="/faq">FAQ</Link> section.
      </p>
    </header>
  );
}
