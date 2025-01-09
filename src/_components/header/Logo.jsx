import Link from "next/link";
export default function Logo({ color }) {
  return (
    <Link className='logo' href='/' style={{ color: color }}>
      Aura
    </Link>
  );
}
