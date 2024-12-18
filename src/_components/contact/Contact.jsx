import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactHeader from "./ContactHeader";
export default function Contact() {
  return (
    <div className='section'>
      <ContactHeader />
      <div className='contact__container'>
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
