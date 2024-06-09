import "./Header.css";
import { Link } from "react-router-dom";
function HeaderBottom() {
  return (
    <div className="header-bottom">
      <div className="header-h1">
        <h1 className="header-h1">Zaph Tours.com</h1>
      </div>

      <ul className="header-nav-list">
        <li className="header-nav-link-list">
          <Link to="/"> Home </Link>
        </li>
        <li className="header-nav-link-list">
          <Link to="/Destinations"> Destinations</Link>
        </li>
        <li className="header-nav-link-list">
          <Link to="/TripsType">Trips Type</Link>
        </li>
        <li className="header-nav-link-list">
          <Link to="/ContactUs">Contact Us</Link> 
         </li>
      </ul>
    </div>
  );
}
export default HeaderBottom;
