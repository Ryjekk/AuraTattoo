import Image from "next/image";
import Button from "@components/button/Button";
import Markdown from "react-markdown";
import Gallery from "@components/gallery/Gallery";
export default function ResidentCardFull({ artist }) {
  const { name, bio, slug, mainImage, instagramLink, gallery, video } = artist;
  return (
    <div className="resident-card">
      <div className="resident-card__content">
        <div className="resident-card__avatar-container">
          {video?.url ? (
            <video
              src={video.url}
              className="resident-card__avatar-video"
              width={800}
              height={600}
              autoPlay={true}
              playsInline={true}
              loop={true}
              muted={true}
              // poster={mainImage.url}
              type="video/mp4"
            />
          ) : (
            <Image
              src={mainImage.url}
              alt={name}
              fill
              className="resident-card__avatar-img"
            />
          )}
        </div>
        {/* <h1 className="resident-card__name">{name}</h1> */}
        <Markdown className="resident-card__bio">{bio}</Markdown>
        {/* <div className="resident-card__buttons">
          <Button link={instagramLink} target="blank" color="black">
            Check my IG
          </Button>
          <Button link={`/booking?artist=${slug}`} color="black">
            Book now
          </Button>
        </div> */}
      </div>
      <div className="resident-card__gallery">
        <Gallery images={gallery} />
      </div>
    </div>
  );
}
