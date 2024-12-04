import ArtistsList from "@components/artists/ArtistsList";
import H1 from "@components/h1/H1";
import { residents } from "@utils/residents";
export default function ResidentsPage() {
  return (
    <div className='artists'>
      <H1>Resident Artists</H1>
      <ArtistsList artists={residents} />
    </div>
  );
}
