import { Link } from "react-router-dom";
import myVedio from "../assets/2627bbed9d6c068e50d2aadcca11ddbb1743095925.mp4";
import "../index.css";
export default function Hero() {
  return (
    <>
      <section className="hero-container">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={myVedio} />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <span className="hero-tagline">
            we speak fluent food
          </span>
          <h1 className="hero-title">
            NO MATTER WHICH <br />
            CORNER OF THE WORLD{" "}
            <span className="highlight-text">it's from.</span>
          </h1>
          <p className="hero-description">
            Freshly cooked global food bowls.
            Authentic Flavours delivered fresh to you Everyday!
          </p>
          <div className="hero-actions">
            <Link to="/menu" className="hero-btn">
              Order Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="hero-features">
            <span>Cooked to Order</span>
            <span>Menu Changes Weekly</span>
            <span>Everyday Pricing</span>
          </div>
        </div>
      </section>
      <section className="fm-section">
        <div className="container">
          <div className="fm-heading">
            <h2>
              BOWLS BEYOND <span>BORDERS</span>
            </h2>
            <p>
              Six promises that make us different. Six reasons to choose
              global flavours for your everyday.
            </p>
          </div>
          <div className="fm-grid">
            <div className="fm-card">
              <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/d7e81079-1ea0-4446-908d-49ee0e9f008c.JPG" alt="" />
              <div className="fm-content">
                <div className="fm-title">
                  <div className="fm-icon">🌍</div>
                  <h3>MORE GLOBAL. MORE OFTEN.</h3>
                </div>
                <p>From Seoul to Sicily, in your weekday bowl.</p>
              </div>
            </div>
            <div className="fm-card">
              <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/5653bcf5-cbd0-44fe-be5f-92cb23a66da9.jpg" alt="" />
              <div className="fm-content">
                <div className="fm-title">
                  <div className="fm-icon">🔥</div>
                  <h3>COOKED FRESH, NOT PREPPED AHEAD.</h3>
                </div>
                <p>We fire up only after you order.</p>
              </div>
            </div>
             <div className="fm-card">
        <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/edf1a1f2-5d33-4f75-a094-2d5d1c0752a8.JPG" alt="" />
        <div className="fm-content">
          <div className="fm-title">
            <div className="fm-icon">🌿</div>
            <h3>WHOLESOME INGREDIENTS. HONEST ORIGINS.</h3>
          </div>
          <p>No additives. No nonsense. Just real food.</p>
        </div>
      </div>
      <div className="fm-card">
        <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/35fabadb-6f5c-4f0b-922f-0c502c8034e2.JPG" alt="" />
        <div className="fm-content">
          <div className="fm-title">
            <div className="fm-icon">⚡</div>
            <h3>GLOBAL CUISINE. BUILT FOR BUSY.</h3>
          </div>
          <p>Busy day? Sticky commute? Our bowls are built for movement.</p>
        </div>
      </div>
      <div className="fm-card">
        <img src="	https://s3-ap-southeast-1.amazonaws.com/foodvista.1/7a727baa-90f7-4619-8264-477cdeff7bf0.jpg" alt="" />
        <div className="fm-content">
          <div className="fm-title">
            <div className="fm-icon">💛</div>
            <h3>EVERYDAY INDULGENCE. THOUGHTFULLY PRICED.</h3>
          </div>
          <p>Global food shouldn't come with global markups.</p>
        </div>
      </div>
      <div className="fm-card">
        <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/c62a0e5c-bc14-4df3-b39c-add99a3422d7.jpg" alt="" />
        <div className="fm-content">
          <div className="fm-title">
            <div className="fm-icon">📅</div>
            <h3>A NEW MENU. EVERY SINGLE WEEK.</h3>
          </div>
          <p>No reruns. Just new reasons to keep coming back.</p>
        </div>
      </div>
          </div>
        </div>
      </section>
    </>
  );
}