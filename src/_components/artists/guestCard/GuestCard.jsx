import Button from "@components/button/Button";
import Image from "next/image";
import Link from "next/link";

export default function GuestCard({ artist }) {
  const { name, image, date, instagramLink } = artist;
  return (
    <div className="artist-card">
      <Link
        className="artist-card__img-wrapper"
        href={instagramLink}
        target="blank"
      >
        <>
          <div className="artist-card__img-overlay"></div>
          <Image
            src={image.url}
            alt={`${name} image`}
            fill
            className="artist-card__img"
          />
          <div className="artist-card__box">
            <h2>{name}</h2>
            <span className="artist-card__date">{date}</span>
            <span className="artist-card__link aritst-card__link--guest">
              Check Instagram
            </span>
          </div>
        </>
      </Link>
    </div>
  );
}
