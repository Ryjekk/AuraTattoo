import Image from "next/image";
import Markdown from "react-markdown";
import Gallery from "@components/gallery/Gallery";
export default function ResidentCardFull({ artist }) {
  const { name, bio, mainImage, gallery, video } = artist;
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
        <Markdown className="resident-card__bio">{bio}</Markdown>
      </div>
      <div className="resident-card__gallery">
        <Gallery images={gallery} />
      </div>
    </div>
  );
}
