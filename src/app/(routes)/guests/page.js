import ArtistsList from "@components/artists/ArtistsList";
import H1 from "@components/h1/H1";
import getGuests from "@services/getGuests";
export default async function GuestsPage() {
  const guests = await getGuests();
  return (
    <div className='artists'>
      <H1>Guest Artists</H1>
      {guests ? <ArtistsList artists={guests} isGuest /> : null}
    </div>
  );
}
