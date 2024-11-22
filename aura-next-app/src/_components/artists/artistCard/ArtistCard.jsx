import Image from "next/image";
import Button from "@components/button/Button";
import Markdown from "react-markdown";
import Link from "next/link";
export default function ArtistCard({ artist }) {
  const { name, bio, image, hash, href } = artist;
  const heading = hash ? `@${hash}` : `${name}`;
  const label = hash ? `${hash}` : `${name}'s work`;
  return (
    <div className='artist-card'>
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className='artist-card__img'
      />
      <div className='artist-card__content'>
        <h3 className='artist-card__heading'>
          <Link href={href}>{heading}</Link>
        </h3>
        <Markdown className='artist-card__bio'>{bio}</Markdown>
        <Button link={href} target='blank' type='primary'>
          {label}
        </Button>
      </div>
    </div>
  );
}
