import SocialLinks from "@components/shared/socialLinks/SocialLinks";
import Button from "@components/button/Button";
export default function Footer() {
  return (
    <footer aria-labelledby='footer-heading' className='footer'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='footer__content'>
        <address className='footer__contact-info'>
          <SocialLinks />

          <a href='tel:+354 780 7819'>+354 780 7819</a>

          <p>Skipholt 15, 105 Reykjavik</p>
        </address>
      </div>
      <div className='footer__legal'>
        <p>© 2024 Aura Tattoo</p>
      </div>
    </footer>
  );
}
