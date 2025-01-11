"use client";
import { useState } from "react";
import Image from "next/image";
import { MasonryPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
function renderNextImage({ alt = "", title, src }, { width, height }) {
  return (
    <div
      className="resident-card__thumbnail-container"
      style={{
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={src}
        alt={alt}
        title={title}
        sizes={{
          size: "992px",
          sizes: [
            { viewport: "(max-width: 767px)", size: "calc(100vw - 32px)" },
            { viewport: "(max-width: 1279px)", size: "calc(100vw - 288px)" },
          ],
        }}
        className="resident-card__thumbnail-img"
      />
    </div>
  );
}

export default function Gallery({ images }) {
  const [index, setIndex] = useState(-1);
  const slides = images.map((image) => ({
    src: image.url,
    alt: image.fileName.split(".")[0],
    width: image.width,
    height: image.height,
    title: image.fileName.split(".")[0],
  }));
  const thumbnails = images.map((image) => ({
    src: image.thumbUrl,
    alt: image.fileName.split(".")[0],
    title: image.fileName.split(".")[0],
    width: image.width,
    height: image.height,
  }));
  return (
    <>
      {thumbnails ? (
        <MasonryPhotoAlbum
          photos={thumbnails}
          render={{ image: renderNextImage }}
          onClick={({ index: current }) => setIndex(current)}
          columns={(w) => (w < 576 ? 2 : w < 992 ? 3 : 4)}
        />
      ) : null}
      <Lightbox
        index={index}
        controller={{
          closeOnPullDown: true,
          closeOnPullUp: true,
          closeOnBackdropClick: true,
        }}
        render={{ image: renderNextImage }}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
}
