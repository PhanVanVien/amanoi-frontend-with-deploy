import "./App.css";
import AddGalery from "./components/Gallery/AddGalery";
import Gallery from "./components/Gallery/Gallery";
import HomePage from "./components/Home/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* Same as */}
      {/* <AddGalery /> */}
      {/* <Gallery /> */}
      <HomePage />
      <ToastContainer />
    </>
  );
}

export default App;
