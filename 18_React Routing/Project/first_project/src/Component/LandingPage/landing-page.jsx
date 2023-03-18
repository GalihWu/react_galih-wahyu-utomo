import './landing-page.style.css';
import hero from './img/hero-img.png.png';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <>
      <div className="main">
        <section className="hero-section">
          <div className="left-content">
            <div>
              <h1 className="title">Better Solutions For Your Business</h1>
              <p className="subtitle">
                We are team of talented designers making websites with Bootstrap
              </p>
            </div>
            <div className="btn-wrapper">
              <Link to={'/'} className="btn">
                Create Product
              </Link>
              <button className="btn">Get Started</button>
            </div>
          </div>
          <img src={hero} alt="hero" />
        </section>
        <section className="newsletter">
          <h2>Join Our Newsletter</h2>
          <p>
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>
          <form action="" className="input-field">
            <input type="text" />
            <button className="submit-btn">Subscribe</button>
          </form>
        </section>
        <footer>
          <div className="footer-top">
            <div>
              <h2>Arsha</h2>
              <p>
                A108 Adam Street <br />
                New York, NY 535022 <br />
                United States
              </p>
              <div className="contact">
                <p>Phone: +1 5589 55488 55</p>
                <p>Email: info@example.com</p>
              </div>
            </div>
            <div className="link">
              <h2>Useful Links</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Terms of service</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className="link">
              <h2>Our Services</h2>
              <ul>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Product Management</li>
                <li>Marketing</li>
                <li>Graphic Design</li>
              </ul>
            </div>
            <div>
              <h2>Our Social Networks</h2>
              <p className="paragraph-text">
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className="circle-wrapper">
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
              </div>
            </div>
          </div>
          <div className="footer-bot">
            <p>© Copyright Arsha. All Rights Reserved</p>
            <p>
              Designed by <span className="span-text"> BootstrapMade</span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
