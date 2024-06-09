import HeaderTop from "./Header-top";
import Navbar from "./Navbar";
import "./Header.css"
const Header = () => {
    return (
        <>
            <div className="header">
            <HeaderTop />
            {/* <HeaderBottom /> */}
           
            </div> 
            <Navbar/>
       </> 
    );
}
export default Header;