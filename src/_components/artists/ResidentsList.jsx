import ResidentCardMini from "@components/artists/residentCard/ResidentCardMini";
export default function ResidentsList({ artists }) {
  return (
    <section className='artists-list' style={{paddingTop: '0px'}}>
      {artists.map((artist, idx) => (
        <ResidentCardMini key={artist.id} artist={artist} idx={idx} />
      ))}
    </section>
  );
}
