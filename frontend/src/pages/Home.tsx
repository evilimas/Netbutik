import { Link } from 'react-router';

type Testimonial = {
  quote: string;
  author: string;
};
type Social = {
  name: string;
  url: string;
  icon: string;
};

function Home() {
  const testimonials: Testimonial[] = [
    {
      quote: "The best pet store experience I've ever had!",
      author: 'Jackob- Happy Customer',
    },
    {
      quote: 'Adopting my new best friend was so easy and fun!',
      author: 'Thomas- Satisfied Pet Owner',
    },
    {
      quote: "I can't imagine my life without my furry companion!",
      author: 'Emily- Loyal Pet Parent',
    },
  ];

  const socials: Social[] = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com',
      icon: './images/fb.png',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com',
      icon: './images/insta.png',
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com',
      icon: './images/youtube.png',
    },
    {
      name: 'Twitter',
      url: 'https://www.twitter.com',
      icon: './images/twiter.png',
    },
  ];

  return (
    <>
      {/* hero section */}
      <main className="hero">
        <h1>Welcome to the Pet Store</h1>
        <p>One and only place to find your dream pet</p>
        <h2>Ready to adopt?</h2>
        <Link to="/pets">Explore our pets!</Link>
      </main>

      {/* socials section */}
      <section className="socials">
        <div className="text">
          <h3>Social media!</h3>
          <p>Follow us on our social media channels for the latest updates!</p>
        </div>
        <div className="icons">
          {socials.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noreferrer">
              <img src={social.icon} alt={social.name} />
            </a>
          ))}
        </div>
      </section>

      {/* testimonials section */}
      <section className="testimonials-section">
        <h2>What our customers say</h2>
        <h4>Testimonials</h4>
        <div className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <article className="testimonial" key={index}>
              <blockquote>
                <p>{testimonial.quote}</p>
                <em>{testimonial.author}</em>
              </blockquote>
            </article>
          ))}
        </div>
      </section>
      {/* about section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          We are a team of passionate animal lovers dedicated to finding forever
          homes for pets in need. Since 2020, we've been connecting families
          with their perfect pet companions through our caring adoption process.
        </p>
        <p>
          Every pet in our care receives proper veterinary attention, love, and
          socialization to ensure they're ready for their new families. We
          believe every animal deserves a loving home.
        </p>
        <p>
          Our mission was to make a online shop where pet lovers can find the
          best friend they need and made it easy to do so.
        </p>
        <Link to="/about" className="learn-more-btn">
          Learn More in About Us
        </Link>
      </section>
      {/* contact us section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>
            Have questions or need assistance? Our friendly team is here to
            help! You can reach out to us via phone, email, or our social media
            channels.
          </p>
          <p>
            Or fill up the form and we will get back to you as soon as possible.
            We look forward to hearing from you!
          </p>
        </div>
        <form action="#" className="contact-form">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Your message here" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
}

export default Home;
