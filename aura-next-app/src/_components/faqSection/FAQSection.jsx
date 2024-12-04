import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "@components/accordion/Accordion";
import { faqData } from "@utils/faq";
import H1 from "@components/h1/H1";

export default function FAQSection() {
  return (
    <section className='section1'>
      <H1 white>FAQ</H1>
      <div className='content-center section'>
        <Accordion>
          {faqData.map((faq, index) => (
            <AccordionItem key={index}>
              <AccordionHeader>{faq.question}</AccordionHeader>
              <AccordionPanel>{faq.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
