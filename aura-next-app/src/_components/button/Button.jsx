import Link from "next/link";

export default function Button({ children, link, color, target }) {
  const colorMap = {
    umber: "btn__umber",
    white: "btn__white",
    black: "btn__black",
  };
  const buttonColor = colorMap[color] || "btn__umber";
  const buttonTarget = target === "blank" ? "_blank" : "_self";
  return (
    <Link href={link} className={`btn ${buttonColor}`} target={buttonTarget}>
      {children}
    </Link>
  );
}
