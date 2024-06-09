/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
import { IoMdCall } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoGlobeSharp } from "react-icons/io5";
import "./Header.css";
const Socials = [
    {
        icon:<IoMdCall/>,
        label:"call center"
    },
    {
       
        label: <input type="text" placeholder="Type your search" />,
        icon:<FaSearch/>
    },

    {
        icon:<IoGlobeSharp/>,
        label:""
    }
];
const SocialInfo = (props) => {
    return(
    <><div className="header-socials-wrapper">
        <p className="icon">{props.icon}</p>
            <p className="label">{props.label}</p>
            </div></>
    )
};
function HeaderTop() {
    return (
        <div className="header-socials">
            {Socials.map((social, index) => {
                return (
                    <SocialInfo
                        key={index}
                        label={social.label}
                        icon={social.icon}
                    />
                );
            })
            }
            </div>
            );
}

export default HeaderTop;