import ResidentCard from "@components/artists/residentCard/ResidentCard";
import GuestCard from "@components/artists/guestCard/GuestCard";
export default function ArtistsList({ artists, isGuest = false }) {
  return (
    <section className='section artists-list content-center'>
      {isGuest
        ? artists.map((artist, idx) => (
            <GuestCard key={artist.id} artist={artist} idx={idx} />
          ))
        : artists.map((artist, idx) => (
            <ResidentCard key={artist.id} artist={artist} idx={idx} />
          ))}
    </section>
  );
}
