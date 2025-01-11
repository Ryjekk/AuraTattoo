import FAQSection from "@components/faqSection/FAQSection";

export default async function FAQ({ searchParams }) {
  const params = await searchParams;
  return (
    <div className="faq">
      <FAQSection initialIndex={params.q} />
    </div>
  );
}
