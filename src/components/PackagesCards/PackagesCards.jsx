import "./PackagesCards.css";
import well from "../../assets/woman-2768518_1280.jpg";
import fam from "../../assets/family-4477874_1280.jpg";
import honey from "../../assets/waterfall-7962263_1280.jpg";
import adv from "../../assets/stone-bridge-5253754_1280.jpg";
import cul from "../../assets/road-1072821_1280.jpg";
import wild from "../../assets/pexels-pixabay-533769.jpg";
import eco from "../../assets/nature-6817376_1280.jpg";
import lux from "../../assets/antique-car-2497416_1280.jpg";
import bea from "../../assets/beach-6517214_1280.jpg";
import culi from "../../assets/bora-bora-3023437_1280.jpg";


import Card from "../Cards/Cards"
import SectionTitle from "../section-title/SectionTitle";

const packages = [
  {
    title: "Honeymoon",
    image: honey,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem?",
    price: "$300",
    offers: "Luxurious Suite for Couples",
  },
  {
    title: "Family",
    image: fam,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem?",
    price: "$300",
    offers: "Fun and Games for Family",
  },
  {
    title: "adventure",
    image: adv,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem?",
    price: "$300",
    offers: "tours",
  },
  {
    title: "cultural tours",
    image: cul,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem?",
    price: "$300",
    offers: "Luxurious Suite for Couples",
  },
  {
    title: "wildlife safaris",
    image: wild,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem?",
    price: "$300",
    offers: "Luxurious Suite for Couples",
  },
  {
    title: "eco-tours",
    image: eco,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem?",
    price: "$300",
    offers: "Luxurious Suite for Couples",
  },
  {
    title: "luxury vacations",
    image: lux,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem?",
    price: "$300",
    offers: "Luxurious Suite for Couples",
  },
  {
    title: " beach holidays",
    image: bea,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem?",
    price: "$300",
    offers: "Luxurious Suite for Couples",
  },
  {
    title: "wellness retreats ",
    image: well,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem?",
    price: "$300",
    offers: "Luxurious Suite for Couples",
  },
  {
    title: "culinary tours",
    image: culi,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem?",
    price: "$300",
    offers: "Luxurious Suite for Couples",
  },
];

export default function PackagesCards() {
  return (
    <>
      <SectionTitle title="Trips Packages" />
      <div className="trips-packages-section">
       
        {packages.map((tripsCard, index) => {
          return (
            <Card
              key={index}
              text={tripsCard.description}
              tripPrice={tripsCard.price}
              offer={tripsCard.offers}
              image={tripsCard.image}
                  title={tripsCard.title}
                  
                  location=""
                  destinationPrice=""
                  link=""
            />
          );
        })}
      </div>
    </>
  );
}
