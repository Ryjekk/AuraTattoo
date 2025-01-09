import Button from "@components/button/Button";
import Image from "next/image";

export default function GuestCard({ artist }) {
  const { name, image, date, instagramLink } = artist;
  return (
    <div className='artist-card'>
      <div className='artist-card__img-wrapper'>
        <Image
          src={image.url}
          alt={`${name} image`}
          fill
          className="artist-card__img"
        />
        <div className='artist-card__box guest__box'>
          <h2>{name} <strong>({date})</strong></h2>
          <Button link={instagramLink} target='blank'>
            @{name}
          </Button>
        </div>
      </div>
    </div>
  );
}
