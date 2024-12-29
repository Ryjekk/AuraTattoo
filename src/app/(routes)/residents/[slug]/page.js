import getResidents from "@services/getResidents";
import getResident from "@services/getResident";
import ResidentCardFull from "@components/artists/residentCard/residentCardFull/ResidentCardFull";
export async function generateStaticParams() {
  const residents = await getResidents();
  return residents.map((resident) => ({
    slug: resident.slug,
  }));
}

export default async function ResidentPage({ params }) {
  const { slug } = await params;
  const resident = await getResident(slug);

  return (
    <div className='artists'>
      {resident ? <ResidentCardFull artist={resident} /> : null}
    </div>
  );
}
