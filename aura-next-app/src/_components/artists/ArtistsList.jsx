import ArtistCard from "@components/artists/artistCard/ArtistCard";

export default function ArtistsList({ artists }) {
  return (
    <section className='section artists-list content-center'>
      {artists.map((artist) => (
        <ArtistCard key={artist.name} artist={artist} />
      ))}
    </section>
  );
}
