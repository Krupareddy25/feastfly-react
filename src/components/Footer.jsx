import "../index.css";
import logo from "../assets/logoTag.png";
export default function Footer() {
  return (
    <footer className="fm-footer">
      <div className="container">
        <div className="fm-footer-grid">
          <div className="fm-footer-brand">
            <div className="fm-logo-box">
              <img
                alt="Freshmenu"
                loading="lazy"
                className="fm-logo"
                src={logo}
              />
            </div>
            <p>
              Freshly prepared meals crafted with love, delivered with care.
              Taste the difference in every bite.
            </p>
            <div className="fm-social-icons">
              <a
                href="https://www.instagram.com/krupareddy5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://github.com/Krupareddy25"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-1.02-.01-1.85-2.78.6-3.37-1.19-3.37-1.19-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.7.11 2.5.32 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.21 2.41.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.67-4.57 4.92.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/krupa-komsani-50632428a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4v12h-4V8zm7.5 0h3.8v1.71h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.09V20h-4v-5.56c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95V20h-4V8z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3>Support</h3>
            <ul>
              <li>Returns & Refunds</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h3>Contact Us</h3>
            <div className="fm-contact-item">
              <span>Email</span>
              <p>feastfly@gmail.com</p>
            </div>
            <div className="fm-contact-item">
              <span>Phone</span>
              <p>+91 98765 43210</p>
            </div>
            <div className="fm-contact-item">
              <span>Location</span>
              <p>Hyderabad, India</p>
            </div>
          </div>
        </div>
        <div className="fm-footer-bottom">
          © 2026 FeastFly. All rights reserved by Krupa Komsani. Made with ❤️
          for food lovers everywhere.
        </div>
      </div>
    </footer>
  );
}
