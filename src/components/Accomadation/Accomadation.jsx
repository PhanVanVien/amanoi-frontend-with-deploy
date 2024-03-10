import React from "react";
import styles from "./Accomadation.module.css";

const Accomadation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img
          width="92%"
          src="https://www.aman.com/sites/default/files/styles/slider_cards_equals_extra_large/public/2021-03/Pavilions%2C-Amanoi%2C-Vietnam.jpg?itok=CFiIdfPv"
        ></img>
        <div className={styles.content}>
          <h3>ACCOMODATION</h3>
          <h1 className={styles.title}>Pavillons & Villas</h1>
          <p>
            Opening onto expansive wooden decks, many with swimming pools,
            Pavilions & Villas offer breathtaking views of the sea or rolling
            hills.
          </p>
        </div>
      </div>
      <div className={styles.item}>
        <img
          width="92%"
          src="https://www.aman.com/sites/default/files/styles/slider_cards_equals_extra_large/public/2021-03/Residences%2C-Amanoi%2C-Vietnam.jpg?itok=Mtig3gl-"
        ></img>
        <div className={styles.content}>
          <h3>ACCOMODATION</h3>
          <h1 className={styles.title}>Residence</h1>
          <p>
            At one with their magnificent natural settings, the fully serviced
            Residences offer up to five bedrooms and vast infinity pools.
          </p>
        </div>
      </div>
      <div>View all accomodations</div>
      <div>Book now</div>
    </div>
  );
};

export default Accomadation;
