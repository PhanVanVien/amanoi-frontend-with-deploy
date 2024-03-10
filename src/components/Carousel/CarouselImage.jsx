import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./CarouselImage.module.css";

const CarouselImage = () => {
  return (
    <Carousel
      //   className={styles.item__container}
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <div className={styles.item}>
        <img
          src="https://www.aman.com/sites/default/files/styles/central_carousel_large/public/2023-04/Amanoi%2C%20Vietnam%20-%20Amanoi%20Ocean%20Pool%20Villa%2034a.jpg?itok=d0AL-aNp"
          width={250}
        ></img>
      </div>
      <div className={styles.item}>
        <img
          src="https://www.aman.com/sites/default/files/styles/central_carousel_large/public/2021-03/Amanoi_Gallery_7.jpg?itok=oGDGFYeE"
          width={250}
        ></img>
      </div>
      <div className={styles.item}>
        <img
          src="https://www.aman.com/sites/default/files/styles/central_carousel_large/public/2021-03/Amanoi_Gallery_8.jpg?itok=K_EVTG3m"
          width={250}
        ></img>
      </div>
      <div className={styles.item}>
        <img
          src="https://www.aman.com/sites/default/files/styles/central_carousel_large/public/2021-03/Amanoi_Gallery_9.jpg?itok=dxVcajx-"
          width={250}
        ></img>
      </div>
      <div className={styles.item}>
        <img
          src="https://www.aman.com/sites/default/files/styles/central_carousel_large/public/2021-03/Amanoi_Gallery_10.jpg?itok=Wy_X6INQ"
          width={250}
        ></img>
      </div>
      <div className={styles.item}>
        <img
          src="https://www.aman.com/sites/default/files/styles/central_carousel_large/public/2021-03/Amanoi_Gallery_6.jpg?itok=KVG5jV3Q"
          width={250}
        ></img>
      </div>
      <div className={styles.item}>
        <img
          src="https://www.aman.com/sites/default/files/styles/central_carousel_large/public/2023-04/Amanoi%2C%20Vietnam%20-%20Amanoi%20Ocean%20Pool%20Villa%2034a.jpg?itok=d0AL-aNp"
          width={250}
        ></img>
      </div>
      <div className={styles.item}>
        <img
          src="https://www.aman.com/sites/default/files/styles/central_carousel_large/public/2021-03/Amanoi_Gallery_7.jpg?itok=oGDGFYeE"
          width={250}
        ></img>
      </div>
      <div className={styles.item}>
        <img
          src="https://www.aman.com/sites/default/files/styles/central_carousel_large/public/2021-03/Amanoi_Gallery_8.jpg?itok=K_EVTG3m"
          width={250}
        ></img>
      </div>
      <div className={styles.item}>
        <img
          src="https://www.aman.com/sites/default/files/styles/central_carousel_large/public/2021-03/Amanoi_Gallery_9.jpg?itok=dxVcajx-"
          width={250}
        ></img>
      </div>
      <div className={styles.item}>
        <img
          src="https://www.aman.com/sites/default/files/styles/central_carousel_large/public/2021-03/Amanoi_Gallery_10.jpg?itok=Wy_X6INQ"
          width={250}
        ></img>
      </div>
      <div className={styles.item}>
        <img
          src="https://www.aman.com/sites/default/files/styles/central_carousel_large/public/2021-03/Amanoi_Gallery_6.jpg?itok=KVG5jV3Q"
          width={250}
        ></img>
      </div>
    </Carousel>
  );
};

export default CarouselImage;
