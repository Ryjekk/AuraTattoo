import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "@components/accordion/Accordion";
import { auraReykjavikPositions } from "@utils/vacancy";
import H1 from "@components/h1/H1";

export default function VacancySection() {
  return (
    <section className='section'>
      <H1> Vacancies at Aura</H1>
      <div className='content-center section'>
        <Accordion color={"umber"}>
          {auraReykjavikPositions.map((vacancies, index) => (
            <AccordionItem key={index}>
              <AccordionHeader>{vacancies.question}</AccordionHeader>
              <AccordionPanel>{vacancies.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
