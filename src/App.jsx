import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import HomePage from "./components/Home/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { withNamespaces } from "react-i18next";
import { IoArrowUp } from "react-icons/io5";
import { useEffect } from "react";
import i18n from "./i18n";
import Reserve from "./components/Reserve/Reserve";

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);

  return (
    <div className="container">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
      <Footer />
      <ToastContainer />
      <button onClick={scrollToTop} className="scroll-top-button">
        <IoArrowUp size={24} />
      </button>
    </div>
  );
}

export default withNamespaces()(App);
