/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
import SectionTitle from "../section-title/SectionTitle";
import "./DestinationCard.css";
import Card from "../Cards/Cards"

const cards = [
  {
    location: "Kisumu",
    image: "",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita vitae dignissimos laborum itaque officia inventore odio culpa animi maiores?",
    price: { groupPrices: "500", individualPrices: "500" },
    link: "/Destinations/Kisumu",
  },
  {
    location: "Mombasa",
    image: "",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita vitae dignissimos laborum itaque officia inventore odio culpa animi maiores?",
    price: { groupPrices: "500", individualPrices: "500" },
    link: "/Destinations/Mombasa",
  },
  {
    location: "Kilifi",
    image: "",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita vitae dignissimos laborum itaque officia inventore odio culpa animi maiores?",
    price: { groupPrices: "500", individualPrices: "500" },
    link: "/Destinations/Kilifi",
  },
  {
    location: "South Africa",
    image: "",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita vitae dignissimos laborum itaque officia inventore odio culpa animi maiores?",
    price: { groupPrices: "500", individualPrices: "500" },
    link: "/Destinations/South Africa",
  },
  {
    location: "Ethiopia",
    image: "",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita vitae dignissimos laborum itaque officia inventore odio culpa animi maiores?",
    price: { groupPrices: "500", individualPrices: "500" },
    link: "/Destinations/Ethiopia",
  },
  {
    location: "London",
    image: "",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita vitae dignissimos laborum itaque officia inventore odio culpa animi maiores?",
    price: { groupPrices: "500", individualPrices: "500" },
    link: "/Destinations/London",
  },
  {
    location: "Kilimanjaro",
    image: "",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita vitae dignissimos laborum itaque officia inventore odio culpa animi maiores?",
    price: { groupPrices: "500", individualPrices: "500" },
    link: "/Destinations/Kilimanjaro",
  },
  {
    location: "Nigeria",
    image: "",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita vitae dignissimos laborum itaque officia inventore odio culpa animi maiores?",
    price: { groupPrices: "500", individualPrices: "500" },
    link: "/Destinations/Nigeria",
  },
  {
    location: "Zanzibar",
    image: "",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita vitae dignissimos laborum itaque officia inventore odio culpa animi maiores?",
    price: { groupPrices: "500", individualPrices: "500" },
    link: "/destinations/zanzibar",
  },
];


export default function DestinationCards() {
  return (
    <>
      <div className="destination-section">
        {/* <h2 className="destination-h2">Flight from Nairobi</h2> */}
        <SectionTitle title="Destinations" />
        {cards.map((destinationCard, index) => {
            return (
              
            <Card
              key={index}
              location={destinationCard.location}
              image={destinationCard.image}
              destinationPrice={destinationCard.price}
              link={destinationCard.link}
                    text={destinationCard.text}
                    
            />
          );
        })}
      </div>
    </>
  );
}
