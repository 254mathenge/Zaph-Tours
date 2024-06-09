import "./Contact.css";
import Socials from "../Footer/Socials";
import SectionTitle from "../section-title/SectionTitle";
function Contact() {
  return (
      <div className="contact-container">
          <div className="title-info">
      <div className="contact-h1">
        <SectionTitle title="Contact Us"/>
      </div>
      
      <div className="contact-information">
        <div className="contact-info">
          <h2>Contact Information</h2>
        </div>
        <div className="contact-email">
          <p>ZaphTours@hotmail.com</p>
        </div>
        <div className="contact-phone">
          <p>+254 712 345 678</p>
        </div>
        <div className="contact-address">
          <p>P.O.Box 12345, Nairobi, Kenya</p>
                  </div>
                  </div>
      </div>

      <div className="contact-form">
        <div className="contact-form-title">
          <h2>Contact Form</h2>
        </div>
        <div className="contact-input">
          <form>
                      <div className="contact-input-form">
                          <label htmlFor="">Name: </label>
              <input type="text" placeholder="Name" required />
            </div>
                      <div className="contact-input-form">
                          <label htmlFor="">Email Address: </label>
              <input type="email" placeholder="Email" required />
            </div>
                      <div className="contact-input-form">
                          <label htmlFor="">Subject: </label>
              <input type="text" placeholder="Subject" required />
            </div>
                      <div className="contact-input-form">
              <textarea placeholder="Type your Message"></textarea>
            </div>
            <div className="contact-input-button">
              <button className="send" type="submit">Send message</button>
            </div>
          </form>
        </div>
      </div>
<div className="map-office">
      <div className="contact-map">
        <div className="contact-map-title">
          <h2>Our Office Location</h2>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63821.04752871994!2d36.74154281616213!3d-1.284659737221008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11a514397ab5%3A0xc3edc7c9efd99258!2sJambojet!5e0!3m2!1sen!2ske!4v1717928755874!5m2!1sen!2ske"
            width="400"
            height="300"
            // style=border:0;
            allowFullScreen=""
            title="map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >
            {" "}
          </iframe>
        </div>
          </div>
          

          <div className="contact-office">
              <div className="contact-office-title">
                  <h2>Ours Office Hours</h2>
              </div>
              <div className="office-hours">
                  <p>Monday-Saturday</p>
                  <p>From 8:00am-6:00pm</p>
              </div>
          </div>
</div>
          <div className="contact-media">
              <div className="contact-media-title">
                  <h2>Find Us On</h2>
              </div>
              <div className="contact-media-socials">
                  <Socials/>
              </div>
          </div>
    </div>
  );
}
export default Contact;
