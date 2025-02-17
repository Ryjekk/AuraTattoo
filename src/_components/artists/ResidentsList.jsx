import ResidentCardMini from "@components/artists/residentCard/ResidentCardMini";
export default function ResidentsList({ artists }) {
  return (
    <section className="artists-list artists-list--residents">
      {artists.map((artist, idx) => (
        <ResidentCardMini key={artist.id} artist={artist} idx={idx} />
      ))}
    </section>
  );
}
