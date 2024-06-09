/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */

import destinationImage from "../../assets/Zanzibar, Tanzania.jpeg";
import "./Cards.css";

// eslint-disable-next-line no-unused-vars
export default function Card ({image,location,tripPrice,destinationPrice,offer,title,text,link})  {
  return (
    <div className="destination-card">
      <div className="destination-image-location">
        <div className="destination-image">
          <img src={image ? image : destinationImage} alt="" />
        </div>
        <div className="destination-image-l">
                  <div className="destination-price">
                      {
                          tripPrice ? <p> ${tripPrice} </p> : (
                              <div>
                                <p>Group : ${destinationPrice.groupPrices}</p>
                           <p>Individual: ${destinationPrice.individualPrices}</p>    
                              </div>
                            
                          )
                      }
            
                      
          </div>
                  <div className="destination-location">
                      <p>{ title ? title : location }</p>
          </div>
        </div>
      </div>
      <div className="destination-text">
        <p>{text}</p>
      </div>

          <div className="destination-link">
              {
                  offer ? (
                      <p>Tour offers- {offer}</p>
                  ) : (
                   <a href={link ? link : ""}>view more</a>       
                  )
              }
      </div>
    </div>
  );
};


