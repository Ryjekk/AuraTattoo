import Link from "next/link";

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="footer">
      <div>
        <h4>Location</h4>
        <div className="footer-box">
          <span>Skipholt 15</span>
          <span>105 Reykjavik</span>
        </div>
      </div>
      <div>
        <h4>Contact</h4>
        <div className="footer-box">
          <a href="tel:+354 780 7819" className="footer-link">
            +354 780 7819
          </a>
          <Link href="/contact" className="footer-link">
            Contact Us
          </Link>
        </div>
      </div>
      <div>
        <h4>Info</h4>
        <div className="footer-box">
          <Link
            href="/faq?q=0#qst-0"
            className="footer-link"
            aria-label="Pre-appointment info"
          >
            Pre-appointment
          </Link>
          <Link href="/faq?q=1#qst-1" className="footer-link">
            Aftercare
          </Link>
          <Link href="/privacy" className="footer-link">
            Privacy and policy
          </Link>
        </div>
      </div>
      <div>
        <h4>Follow</h4>
        <div className="footer-box footer-box-row">
          <a
            href="https://www.instagram.com/aura.reykjavik/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/ico/fb.svg" alt="ig" className="social-link" />
          </a>
          <a
            href="https://www.facebook.com/anikawr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/ico/ig.svg" alt="facebook" className="social-link" />
          </a>
          <a
            href="mailto:hello@aurareykjavik.com?subject=Hello Aura"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/ico/mail.svg" alt="mail" className="social-link" />
          </a>
        </div>
      </div>
    </footer>
  );
}
