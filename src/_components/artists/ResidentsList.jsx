import ResidentCardMini from "@components/artists/residentCard/ResidentCardMini";
export default function ResidentsList({ artists }) {
  return (
    <section className='section artists-list content-center'>
      {artists.map((artist, idx) => (
        <ResidentCardMini key={artist.id} artist={artist} idx={idx} />
      ))}
    </section>
  );
}
