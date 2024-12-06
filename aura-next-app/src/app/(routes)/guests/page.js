import ArtistsList from "@components/artists/ArtistsList";
import H1 from "@components/h1/H1";
import getGuests from "@services/getGuests";
export default async function GuestsPage() {
  const guests = await getGuests();
  console.log(guests);
  // if (!guests) {
  //   return <p>No Guest artists available.</p>; // or any fallback UI
  // }
  return (
    <div className='artists'>
      <H1>Guest Artists</H1>
      {guests ? <ArtistsList artists={guests} isGuest /> : null}
    </div>
  );
}
