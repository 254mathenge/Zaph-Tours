/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import "./Testimonials.css"
import person1 from "../../assets/person1.jpg";
import person2 from "../../assets/person2.jpg";
import person3 from "../../assets/person3.jpg";
import person4 from "../../assets/person4.jpg";
import SectionTitle from "../section-title/SectionTitle";
const testimonials = [
    {
        
        image:person1,
        name: "Frank  ",
        place: "London",
        testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, beatae?"
    },
    {
       
        image: person2,
        name: "Jules",
        place: "Egypt",
        testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, beatae?"
    },
    {
       
        image: person3,
        name: "Sofia",
        place: "Zanzibar",
        testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, beatae?"
    },
    {
        
        image: person4,
        name: "Gates",
        place: "South Africa",
        testimony: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, beatae?"
    },
]

const TestimonialCard =(props)=> {
    return (
        <div className="testimonials-card-section">
      <div className="testimonial-details">
        
        <div className="testimonial-image">
          <img src={props.image} alt=""/>
                    
                    </div>
                <div className="testimonial-name">
        <p>{props.name} </p>
      </div>
        <div className="testimonial-place">
          <p>{props.place}</p>
                </div>
                <div className="testimonial-text">
          <p>{props.testimony}</p>
        </div>
      </div>
    </div>
  );
};
    
function Testimonials() {
    return (
        <div className="testimonials-card-section">
            {/* <h2 className="testimonials-h2">Testimonials</h2> */}
            <SectionTitle title="Testimonials" />
        <div className="testimonial-card">
                {testimonials.map((testimonial, index) => {
                    return (
                        <TestimonialCard
                            key={index}
                            
                            image={testimonial.image}
                            name={testimonial.name}
                            place={testimonial.place}
                            testimony={testimonial.testimony}
                        />
                    );
             
                })}
                </div>
        </div>
            );
        }
        export default Testimonials;