import Link from "next/link";

export default function Button({ children, link, type, target }) {
  const buttonType = type === "primary" ? "btn__primary" : "btn__secondary";
  const buttonTarget = target === "blank" ? "_blank" : "_self";
  return (
    <Link href={link} className={`btn ${buttonType}`} target={buttonTarget}>
      {children}
    </Link>
  );
}
