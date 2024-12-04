import Contact from "@components/contact/Contact";
import MapsGoogle from "@components/mapsGoogle/MapsGoogle";
export default function ContactUs() {
  return (
    <div className='contact'>
      <div className='content-wrapper content-center'>
        <Contact />
        <MapsGoogle />
      </div>
    </div>
  );
}
