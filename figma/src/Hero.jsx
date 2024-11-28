import appstore from '../src/assets/appstore.svg';
import googleplay from '../src/assets/googleplay.svg';
import appimages from '../src/assets/app images.svg';
function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="headline">
          <h1>Manage all your money in one app</h1>
          <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket</p>
          <div className="button">
            <a className="btn-download-app" href="#"><img src={appstore} alt="appstore" /></a>
            <a className="btn-download-app" href="#"><img src={googleplay} alt="googleplay" /></a>
          </div>
          <div>
            <a href="#" className="discover-more">
              <span className="btn-circle">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
              <span>Discover more</span>
            </a>
          </div>
        </div>
        <div className="hero-images">
          <img className="app-images" src= {appimages} alt="App Images" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
