import Image from "next/image";
import Link from "next/link";
export default function ResidentCardMini({ artist, idx }) {
  const { name, mainImage, slug } = artist;
  return (
    <div className="artist-card">
      <Link href={`residents/${slug}`} className="artist-card__img-wrapper">
        <>
          <div className="artist-card__img-overlay"></div>
          <Image
            src={mainImage.url}
            alt={`${name} image`}
            fill
            className="artist-card__img"
            placeholder="blur"
            blurDataURL={mainImage.url}
          />
          <div className="artist-card__box">
            <h2>{name}</h2>
            <span className="artist-card__link">read more</span>
          </div>
        </>
      </Link>
    </div>
  );
}
