import Image from "next/image";

const MiniHero = ({
  text,
  subText,
  image,
  id,
  main = true,
  white = false,
  children,
  blurURL,
}) => {
  return (
    <div className="miniHero__wrapper" id={id}>
      {image && (
        <Image
          src={image}
          alt="bg"
          fill
          placeholder="blur"
          style={{ objectFit: "cover" }}
          blurDataURL={blurURL}
          priority
        />
      )}
      {main ? (
        <h1 className={`headline ${white ? "text--white" : ""}`}>{text}</h1>
      ) : (
        <h2 className={`headline ${white ? "text--white" : ""}`}>{text}</h2>
      )}
      <p className={`${white ? "text--white" : ""}`}>{subText}</p>
      {children}
    </div>
  );
};

export default MiniHero;
