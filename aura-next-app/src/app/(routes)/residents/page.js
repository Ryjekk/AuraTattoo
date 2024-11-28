import ArtistsList from "@components/artists/ArtistsList";
import { residents } from "@utils/residents";
export default function ResidentsPage() {
  return (
    <div className='residents'>
      <ArtistsList artists={residents} />
    </div>
  );
}
