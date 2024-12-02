import Image from "next/image";

export default function Logo() {
  return (
    <div className='logo'>
      <Image src='/aura-logo-mini.png' alt='Aura logo' width={70} height={50} />
    </div>
  );
}
