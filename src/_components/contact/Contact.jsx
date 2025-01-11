import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import MapsGoogle from "@components/mapsGoogle/MapsGoogle";

export default function Contact() {
    return (
        <section className='column__section'>
            <div className='column__image-wrapper-reverse'>
                <MapsGoogle />
            </div>
            <div className='column__content contact__content'>
                <ContactHeader />
                <ContactForm />
            </div>
        </section>
    );
}