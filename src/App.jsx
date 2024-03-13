import "./App.css";
import AddGalery from "./components/Gallery/AddGalery";
import Gallery from "./components/Gallery/Gallery";
import HomePage from "./components/Home/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { IoArrowUp } from "react-icons/io5";

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="container">
      {/* Same as */}
      {/* <AddGalery /> */}
      {/* <Gallery /> */}
      {/* <HomePage /> */}
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
      <ToastContainer />
      <button onClick={scrollToTop} className="scroll-top-button">
        {/* <IoIosArrowUp /> */}
        <IoArrowUp size={24} />
      </button>
    </div>
  );
}

export default App;
