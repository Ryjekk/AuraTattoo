import Image from "next/image";

const MiniHero = ({ text, subText, image, id }) => {
  return (
    <div className="miniHero__wrapper" id={id}>
      {image && (
        <Image src={image} alt="bg" fill style={{ objectFit: "cover" }} />
      )}
      <h1 className="headline">{text}</h1>
      <p>{subText}</p>
    </div>
  );
};

export default MiniHero;
