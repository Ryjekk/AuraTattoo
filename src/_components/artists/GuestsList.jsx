import GuestCard from "@components/artists/guestCard/GuestCard";
export default function GuestsList({ artists }) {
  return (
    <section className='artists-list'>
      {artists.map((artist, idx) => (
        <GuestCard key={artist.id} artist={artist} idx={idx} />
      ))}
    </section>
  );
}
