import ArtistCard from "@components/artists/artistCard/ArtistCard";

export default function ArtistsList({ artists }) {
  return (
    <div className='artists-list'>
      {artists.map((artist) => (
        <ArtistCard key={artist.name} artist={artist} />
      ))}
    </div>
  );
}
