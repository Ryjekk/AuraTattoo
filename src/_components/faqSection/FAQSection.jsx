import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "@components/accordion/Accordion";
import { faqData } from "@utils/faq";
import H1 from "@components/h1/H1";

export default function FAQSection({ initialIndex }) {
  return (
    <section className="section">
      <H1 white>FAQ</H1>
      <div className="content-center section">
        <Accordion defaultIndex={Number(initialIndex)}>
          {faqData.map((faq, index) => (
            <AccordionItem key={index} index={index}>
              <AccordionHeader>{faq.question}</AccordionHeader>
              <AccordionPanel>{faq.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
