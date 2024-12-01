export default function ContactInfo() {
  return (
    <div className='contact__info'>
      <div className='contact__info--email'>
        <p>hello@aurareykjavik.com</p>
      </div>

      <div className='contact__info--booking'>
        <p>
          Please note that to book an appointment it is best to reach out to
          your <span>artist</span> directly.
        </p>
      </div>

      <div className='contact__info--phone'>
        <p>For last minute booking please call the phone:</p>
        <p>+354 780 7819</p>
      </div>

      <div className='contact__info--address'>
        <p>Aura Reykjavik</p>
        <p>Skipholt 15, 105 Reykjavik</p>
        <p>Iceland</p>
      </div>
    </div>
  );
}
