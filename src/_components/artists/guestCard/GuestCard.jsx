import Image from "next/image";
import Button from "@components/button/Button";
import Markdown from "react-markdown";
export default function GuestCard({ artist, idx }) {
  const {
    name,
    returningArtist,
    about,
    image,
    date,
    instagramLink,
    bookingDetails,
  } = artist;
  return (
    <div className='artist-card'>
      <Image
        src={image.url}
        alt={name}
        width={400}
        height={450}
        className='artist-card__img'
        priority={idx < 3}
      />
      <div className='artist-card__content'>
        <p className='artist-card__name'>
          Tattoo artist: {name}{" "}
          {returningArtist ? "(returning guest artist)" : null}
        </p>
        <Markdown className='artist-card__bio'>{about}</Markdown>
        <p className='artist-card__date'>Guest spot dates: {date}</p>
        <p className='artist-card__booking-details'>{bookingDetails}</p>
        <Button link={instagramLink} target='blank' color='black'>
          @{name}
        </Button>
      </div>
    </div>
  );
}
