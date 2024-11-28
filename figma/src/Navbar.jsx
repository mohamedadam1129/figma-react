import solid from '../src/assets/solid logo.svg';    // Ensure the path is correct
function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <a href="#" className="navbar-logo">
              <img src={solid} alt="navbar-logo" className="logo-image" />
            </a>
            <a href="#" className="navbar-features">Features</a>
          </div>
          <div className="navbar-right">
            <p>Dark mode</p>
            <label className="switch">
              <input type="checkbox" id="darkmodetoggle" />
              <span className="slider-round"></span>
            </label>
            <a href="#" className="navbar-button">
              <i className="fa-thin fa-user-large"></i>
              <span>Sign in / up</span>
            </a>
            <button className="btn-mobile">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
