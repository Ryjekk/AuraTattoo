import Image from "next/image";
import Button from "@components/button/Button";
import Markdown from "react-markdown";
export default function ResidentCardMini({ artist, idx }) {
  const { name, excerpt, mainImage, slug } = artist;
  return (
    <div className='artist-card'>
      <Image
        src={mainImage.url}
        alt={name}
        width={320}
        height={480}
        className='artist-card__img'
        sizes='(max-width: 575px) 100vw,(max-width: 992px) 50vw, 33vw'
        priority={idx < 3}
      />
      <div className='artist-card__content'>
        <Markdown className='artist-card__bio'>{excerpt}</Markdown>
        <div className='artist-card__buttons'>
          <Button link={`residents/${slug}`} color='black'>
            read more
          </Button>
          <Button
            link={{
              pathname: "/booking",
              query: { artist: slug },
            }}
            color='black'
          >
            Booking
          </Button>
        </div>
      </div>
    </div>
  );
}
