import "./Footer.css";
import Socials from "./Socials"

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <h2 className="footer-h2">Zaph Tours.com</h2>
        <div className="footer-text-socials">
          <div>
            <p className="our-socials">Our Socials</p>
           <Socials/> 
           </div>
      <p className="footer-text">
        &copy; 2024 Zaph Tours limited.All rights reserved. 
      </p>
   
         </div>
        </div>
    </div>
  );
}
export default Footer;
