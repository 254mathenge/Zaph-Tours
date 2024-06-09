

import "./assets/global.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Destinations from "./pages/Destinations";
import TripsType from "./pages/Trips-types";
import ContactUs from "./pages/Contact-us"
import Blog from "./pages/Blog";
import NotFound from "./components/404/NotFound";
function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <div className="page__spacer"/>
          <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/Destinations" element={<Destinations />} />
            <Route path="/TripsType" element={<TripsType />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/Destinations/:destination" element={<Blog />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );

}

export default App;
