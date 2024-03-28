import React from "react";
import Header from "../Header/Header";
import Activities from "../Activities/Activities";
import LocationInfo from "../Location/LocationInfo";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import CarouselImage from "../Carousel/CarouselImage";
import Accomadation from "../Accomadation/Accomadation";
import Galery from "../Gallery/Gallery";
import styles from "./HomePage.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const HomePage = () => {
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <VideoPlayer />
      <CarouselImage />
      <Accomadation />
      <Activities />
      <LocationInfo />
    </div>
  );
};

export default HomePage;
