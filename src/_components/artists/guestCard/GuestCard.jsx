import Image from "next/image";
import Button from "@components/button/Button";
import dynamic from "next/dynamic";

export default function GuestCard({ artist, idx }) {
  const Markdown = dynamic(() => import("react-markdown"));
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
        width={320}
        height={480}
        className='artist-card__img'
        sizes='(max-width: 575px) 100vw,(max-width: 992px) 50vw, 33vw'
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
