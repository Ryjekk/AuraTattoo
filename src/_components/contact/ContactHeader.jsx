export default function ContactHeader() {
  return (
      <header className='column__header column__header--left'>
          <h2 className='column__subtitle'>Hit us up with more questions</h2>
          <p className='column__text'>
              Use this form if you want to purchase a gift card, join out team, visit us, or just want to say hi.
          </p>
          <p className='column__text'>
              Urgent case? Call us at <a  className="column__link" href='tel:+3547807819'>+354 780 7819</a>
          </p>
      </header>
  );
}
