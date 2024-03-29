import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import HomePage from "./components/Home/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { IoArrowUp } from "react-icons/io5";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Reserve from "./components/Reserve/Reserve/Reserve";
import ModifyReservation from "./components/Reserve/ModifyReservation/ModifyReservation";
import { DateRangePicker } from "rsuite";
import { IoMdCalendar } from "react-icons/io";

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container">
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery title="Explore Amanoi" />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route
          path="/reserve/modify-reservation"
          element={<ModifyReservation />}
        />
      </Routes>
      <Footer />
      <ToastContainer />
      <button onClick={scrollToTop} className="scroll-top-button">
        <IoArrowUp size={24} />
      </button>
    </div>
  );
}

export default App;
