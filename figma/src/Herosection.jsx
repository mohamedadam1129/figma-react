import appstore from '../src/assets/appstore.svg';
import googleplay from '../src/assets/googleplay.svg';
import appimages from '../src/assets/app images.svg';

const HeroSection = () => (
  <section id="hero">
    <div className="container">
      <div className="headline">
        <h1>Manage all your money in one app</h1>
        <p>We offer you a new generation of mobile banking. Save, spend & manage money in your pocket.</p>
        <div className="button">
          <a className="btn-download-app" href="#">
            <img src={appstore} alt="App Store" />
          </a>
          <a className="btn-download-app" href="#">
            <img src={googleplay} alt="Google Play" />
          </a>
        </div>
        <a href="#" className="discover-more">
          <span className="btn-circle">
          </span>
          <span>Discover more</span>
        </a>
      </div>
      <div className="hero-images">
        <img className="app-images" src={appimages} alt="App Screenshots" />
      </div>
    </div>
  </section>
);


export default HeroSection; 