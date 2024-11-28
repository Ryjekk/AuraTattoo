import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "@components/accordion/Accordion";
import { faqData } from "@utils/faq";

export default function FAQSection() {
  return (
    <section className='section'>
      <h2>FAQs</h2>
      <div className='content-center'>
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
