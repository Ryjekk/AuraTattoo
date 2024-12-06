import ResidentCard from "@components/artists/residentCard/ResidentCard";
import GuestCard from "@components/artists/guestCard/GuestCard";
export default function ArtistsList({ artists, isGuest = false }) {
  return (
    <section className='section artists-list content-center'>
      {isGuest
        ? artists.map((artist) => <GuestCard key={artist.id} artist={artist} />)
        : artists.map((artist) => (
            <ResidentCard key={artist.id} artist={artist} />
          ))}
    </section>
  );
}
