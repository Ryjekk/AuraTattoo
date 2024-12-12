import Image from "next/image";
import Button from "@components/button/Button";
import Markdown from "react-markdown";
export default function ResidentCard({ artist, idx }) {
  const { name, about, image, instagramLink } = artist;
  return (
    <div className='artist-card'>
      <Image
        src={image.url}
        alt={name}
        width={300}
        height={300}
        className='artist-card__img'
        priority={idx < 3}
      />
      <div className='artist-card__content'>
        <Markdown className='artist-card__bio'>{about}</Markdown>
        <Button link={instagramLink} target='blank' color='black'>
          {name}
        </Button>
      </div>
    </div>
  );
}
