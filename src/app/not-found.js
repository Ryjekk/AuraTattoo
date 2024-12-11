import Logo from "@components/header/Logo";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className='not-found'>
      <h1 className='sr-only'>Not Found</h1>
      <Logo />
      <p>
        The requested page could not
        <br />
        be found
      </p>

      {/* <p>Could not find requested resource</p> */}
      <Link href='/'>Return Home</Link>
    </section>
  );
}
