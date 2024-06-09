import image4 from "../../assets/image4.jpg"
import SectionTitle from "../section-title/SectionTitle";
import "./About.css"
function About() {
    return (

        <div className="about-section-wrapper">
            {/* <h2 className="about-title"  >About Us</h2> */}
            <SectionTitle title="About Us" />
            <div className="about-section">
            <div className="about-image">
                <img src={image4} alt="about-image" width="100%" height="100%" />
            </div>
            <div className="about-text">
                <p className="about-text-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, praesentium, fuga exercitationem modi velit deserunt, eligendi a nostrum quia ipsum consequuntur! Modi nemo ducimus reprehenderit dolor assumenda ipsam labore ipsa quisquam, recusandae dolore esse ipsum mollitia ad deleniti error nisi illo nostrum! Commodi obcaecati quam quis blanditiis sint earum officiis?
                </p>
            </div>
            </div>
        </div>
    )
}
export default About;