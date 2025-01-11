import Image from "next/image";
import Link from "next/link";

export default function GuestCard({ artist }) {
  const { name, image, date, instagramLink } = artist;
  return (
    <div className="guest-card">
      <Link
        className="guest-card__img-wrapper"
        href={instagramLink}
        target="blank"
      >
        <>
          <div className="guest-card__img-overlay"></div>
          <Image
            src={image.url}
            alt={`${name} image`}
            fill
            className="artist-card__img"
          />
          <div className="guest-card__box">
            <h2>{name}</h2>
            <span className="guest-card__date">{date}</span>
            <span className="artist-card__link guest-card__link">
              Check Instagram
            </span>
          </div>
        </>
      </Link>
    </div>
  );
}
