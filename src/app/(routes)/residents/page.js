import ArtistsList from "@components/artists/ArtistsList";
import H1 from "@components/h1/H1";
import getResidents from "@services/getResidents";
export default async function ResidentsPage() {
  const residents = await getResidents();
  return (
    <div className='artists'>
      <H1>Resident Artists</H1>
      {residents ? <ArtistsList artists={residents} /> : null}
    </div>
  );
}
