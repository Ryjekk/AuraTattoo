import ResidentsList from "@components/artists/ResidentsList";
import H1 from "@components/h1/H1";
import getResidents from "@services/getResidents";
export default async function ResidentsPage() {
  const residents = await getResidents();
  return (
    <div className='artists'>
      <H1>Resident Artists</H1>
      {residents ? <ResidentsList artists={residents} /> : null}
    </div>
  );
}
