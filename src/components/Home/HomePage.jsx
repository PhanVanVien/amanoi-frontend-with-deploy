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

const HomePage = () => {
  return (
    <>
      <Header />
      <Nav />
      <VideoPlayer />
      <CarouselImage />
      <Accomadation />
      <Activities />
      <LocationInfo />
      <Footer />
      <Galery />
    </>
  );
};

export default HomePage;
