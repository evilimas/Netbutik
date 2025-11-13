function About() {
  return (
    <>
      <section className="about-hero">
        <h1>About Netbutik Pet Store</h1>
        <p className="tagline">Where every pet finds their perfect family</p>
      </section>

      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Founded in 2020, Netbutik Pet Store began as a dream to create a
          better world for both pets and their future families. We are a small
          team of passionate animal lovers dedicated to finding loving homes for
          pets in need. What started as a local rescue initiative has grown into
          a trusted community hub for pet adoption and care.
        </p>
        <p>
          Every pet that comes through our doors receives the love, care, and
          attention they deserve. We believe that every animal has the right to
          a safe, loving home, and we work tirelessly to make that happen.
        </p>
      </section>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          To connect loving families with their perfect pet companions while
          ensuring every animal receives the care and respect they deserve.
          We're committed to responsible pet ownership and creating lasting
          bonds that enrich both human and animal lives.
        </p>
      </section>

      <section className="what-we-do">
        <h2>What We Do</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>🏠 Pet Adoption</h3>
            <p>
              We carefully match pets with loving families, ensuring the perfect
              fit for both.
            </p>
          </div>
          <div className="service-item">
            <h3>🏥 Health & Wellness</h3>
            <p>
              All our pets receive comprehensive veterinary care, vaccinations,
              and health screenings.
            </p>
          </div>
          <div className="service-item">
            <h3>📚 Education & Support</h3>
            <p>
              We provide ongoing support and education to help new pet parents
              succeed.
            </p>
          </div>
          <div className="service-item">
            <h3>💝 Community Outreach</h3>
            <p>
              We actively work with local shelters and rescue organizations to
              save more lives.
            </p>
          </div>
        </div>
      </section>

      <section className="our-values">
        <h2>Our Values</h2>
        <ul className="values-list">
          <li>
            <strong>Compassion:</strong> Every animal deserves love, care, and
            respect
          </li>
          <li>
            <strong>Integrity:</strong> We're honest about each pet's needs and
            temperament
          </li>
          <li>
            <strong>Community:</strong> We build lasting relationships with our
            adopting families
          </li>
          <li>
            <strong>Excellence:</strong> We maintain the highest standards of
            animal care
          </li>
          <li>
            <strong>Responsibility:</strong> We promote ethical pet ownership
            and proper care
          </li>
        </ul>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <p>
          Our dedicated team of animal care specialists, veterinary
          professionals, and adoption counselors work together to ensure every
          pet receives individualized attention and care. From our kennel
          assistants who provide daily love and exercise, to our adoption
          specialists who help match families with their perfect companions,
          every team member shares our passion for animal welfare.
        </p>
      </section>

      <section className="stats-section">
        <h2>Making a Difference</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Happy adoptions completed</p>
          </div>
          <div className="stat-item">
            <h3>95%</h3>
            <p>Successful adoption rate</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Emergency care available</p>
          </div>
          <div className="stat-item">
            <h3>4 Years</h3>
            <p>Serving our community</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Find Your New Best Friend?</h2>
        <p>
          Visit our pets page to see all the wonderful animals waiting for their
          forever homes!
        </p>
      </section>
    </>
  );
}
export default About;
