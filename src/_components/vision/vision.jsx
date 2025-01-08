export default function Vision({text, subText}) {
  return (
    <section className='section vision content-center'>
      <blockquote className='vision__blockquote'>
        <p>{text}</p>
        <p>{subText}</p>
      </blockquote>
    </section>
  );
}
