import getResidents from "@services/getResidents";
import getResident from "@services/getResident";
import ResidentCardFull from "@components/artists/residentCard/residentCardFull/ResidentCardFull";
import MiniHero from "@components/miniHero/MiniHero";
import Button from "@components/button/Button";
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
    <div className="artist">
      <MiniHero text={resident.name}>
        <div className="resident-card__buttons">
          <Button link={resident.instagramLink} target="blank" color="text">
            Instagram
          </Button>
          <Button link={`/booking?artist=${slug}`} color="text">
            Book now
          </Button>
        </div>
      </MiniHero>
      {resident ? <ResidentCardFull artist={resident} /> : null}
    </div>
  );
}
