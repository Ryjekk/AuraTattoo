import GalleryCarousel from "./GalleryCarousel";

export default function Gallery({ instagramSnaps }) {
  return (
    <section className='gallery'>
      <h2 className='gallery__header'>Our Instagram</h2>
      <GalleryCarousel instagramSnaps={instagramSnaps} />
    </section>
  );
}
