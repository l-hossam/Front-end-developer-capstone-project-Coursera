import "../components/styles/Footer.css";
import logo from "../components/assets/logo.png";

function Footer() {
  return (
    <div className="container">
      <div className="container-sizing">
        <div className="image-container-sec">
          <img className="image-size" src={logo} alt="Little Lemon Logo" />
        </div>

        <p className="text">
          Little Lemon is a charming neighborhood bistro that serves simple food and classic
          cocktails in a lively but casual environment. The restaurant features a locally sourced
          menu with daily specials.
        </p>

        <div className="contacts-items">
          <div className="item">
            <p>LOCATIONS</p>
            <ul>
              <li>Accra</li>
              <li>Kumasi</li>
              <li>Cape Coast</li>
              <li>Tamale</li>
            </ul>
          </div>

          <div className="item">
            <p>OPENING TIMES</p>
            <ul>
              <li>Mon - Wed: 10:30AM - 12:00AM</li>
              <li>Fri: 12:00PM - 1:00AM</li>
              <li>Sat - Sun: 10:30AM - 12:00AM</li>
            </ul>
          </div>

          <div className="item">
            <p>CONTACT US</p>
            <ul>
              <li>96 Abafom Road, North Ridge - Accra</li>
              <li>Tel: 020 7928 0678</li>
              <li>Email: info@littlelemon.com</li>
            </ul>
          </div>
        </div>

        <p className="lst-sentence">© 2023 Little Lemon Ltd. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
