

import "./assets/global.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Destinations from "./pages/Destinations";
import TripsType from "./pages/Trips-types";
import ContactUs from "./pages/Contact-us"
import Blog from "./pages/Blog";
function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/Destinations" element={<Destinations />} />
            <Route path="/TripsType" element={<TripsType />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/Destinations/:destination"element={<Blog/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );

}

export default App;
