import "../index.css";
export default function About() {
  return (
    <main>
      <section className="about-section">
        <div className="container text-center">
          <div className="about-wrapper">
            <h2 className="about-title">
              BOWLS BEYOND
              <span className="highlight"> BORDERS</span>
            </h2>
            <div className="about-text">
              <strong className="belief">
                This is our belief.
              </strong>
              <p>
                Global cuisine doesn't belong behind velvet ropes.<br/>
                The world's most iconic flavours — whether it's a bold Indian curry,<br/>
                a rich Italian ragu, or a comforting continental classic —<br/>
                should be part of your every day.
              </p>
              <p>
                Not an occasion. Not a luxury.<br/>
                Just lunch. Or dinner.<br/>
                Or a craving at 3pm.
              </p>
              <p>
                You shouldn't need a passport, a reservation,<br/>
                or a big night out to taste something unforgettable.<br/>
                You shouldn't have to choose between convenience and craft.<br/>
                Or between flavour and freshness.
              </p>
              <p className="highlighted-text">
                So we bring the world to your table.<br/>
                One bowl at a time.
              </p>
              <p>
                Inspired by well-loved recipes from all over India!<br/>
                Cooked only when you order.<br/>
                Served hot, fresh, and priced for your everyday.
              </p>
              <p>
                And because the world is always cooking up something new,<br/>
                our menu changes every week —<br/>
                so there's always a new craving to discover.
              </p>
              <p className="closing">
                No pretence. No fine print.<br/>
                What you get with us is just
                <span className="highlight"> bowls, beyond borders.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}