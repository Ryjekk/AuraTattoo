import getResidents from "@services/getResidents";
import BookingSection from "@components/booking/BookingSection";
export default async function BookingPage({ searchParams }) {
  const residents = await getResidents();
  const params = await searchParams;
  return <BookingSection residents={residents} initialArtist={params.artist} />;
}
