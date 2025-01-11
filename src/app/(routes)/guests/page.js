import ArtistsList from "@components/artists/GuestsList";
import getGuests from "@services/getGuests";
import MiniHero from "@components/miniHero/MiniHero";
export default async function GuestsPage() {
  const guests = await getGuests();
  return (
    <div>
        <MiniHero
            text="Guest Artists"
            subText="Book your session directly with the artist"
            id="guests"
        />
      {guests ? <ArtistsList artists={guests} /> : null}
    </div>
  );
}
