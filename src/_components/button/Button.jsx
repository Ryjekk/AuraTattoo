import Link from "next/link";

export default function Button({ children, link, color, target, className }) {
  const colorMap = {
    umber: "btn__umber",
    white: "btn__white",
    black: "btn__black",
    text: "btn__text",
  };
  const buttonColor = colorMap[color] || "btn__black";
  const buttonTarget = target === "blank" ? "_blank" : "_self";
  return (
    <Link
      href={link}
      className={`btn ${buttonColor} ${className}`}
      target={buttonTarget}
    >
      {children}
    </Link>
  );
}

export const ArrowRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 18l6-6-6-6" />
    </svg>
  );
};
