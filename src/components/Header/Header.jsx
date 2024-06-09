import HeaderTop from "./Header-top";
import HeaderBottom from "./Header-bottom";
import "./Header.css"
const Header = () => {
    return (
        <>
            <div className="header">
            <HeaderTop />
            <HeaderBottom />
            </div>
       </> 
    );
}
export default Header;