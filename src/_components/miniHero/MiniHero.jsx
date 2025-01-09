import Image from "next/image";

const MiniHero = ({ text, subText, image, id, main = true }) => {
  return (
    <div className="miniHero__wrapper" id={id}>
      {image && (
        <Image src={image} alt="bg" fill style={{ objectFit: "cover" }} />
      )}
      {main ? (
        <h1 className="headline">{text}</h1>
      ) : (
        <h2 className="headline">{text}</h2>
      )}
      <p>{subText}</p>
    </div>
  );
};

export default MiniHero;
