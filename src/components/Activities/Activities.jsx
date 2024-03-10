import React from "react";
import Activity from "./Activity";
import styles from "./Activities.module.css";

const Activities = () => {
  const activities = [
    {
      image:
        "https://www.aman.com/sites/default/files/styles/carousel_cards_slim_extra_large/public/2021-12/Amanoi%2C%20Vietnam%20-%20Celebrations%20%26%20Events%2C%20Beach%20Club%20restaurant%2C%20wedding%20reception_High%20Res_24150.jpg?itok=_F9Fnovq",
      topic: "celebrations",
      title: "Host the perfect event",
      content:
        "Embraced by a spectacularly beautiful wilderness on a stretch of dramatic coastline, Amanoi offers a plethora of settings both indoors and out for the most exclusive weddings and celebrations in Vietnam.",
    },
    {
      image:
        "https://www.aman.com/sites/default/files/styles/carousel_cards_slim_extra_large/public/2021-03/Amanoi_Gallery_27.jpg?itok=ke6om1Xd",
      topic: "dining",
      title: "Fragant flavours",
      content:
        "The restaurants at Amanoi celebrate the fragrant flavours of Vietnamese cuisine, making the most of seasonal market produce and the daily catch.",
    },
    {
      image:
        "https://www.aman.com/sites/default/files/styles/carousel_cards_slim_extra_large/public/2023-06/amanoi_vietnam_-_twilight_cliff_lounge.jpg?itok=OS8WVmbQ",
      topic: "experiences",
      title: "What's on at Amanoi",
      content:
        "Celebrate summer on Vietnam’s dramatic coastline with Amanoi’s special seasonal offerings designed to relax, rejuvenate and enliven body and soul.",
    },
  ];
  const activities2 = [
    {
      image:
        "https://www.aman.com/sites/default/files/styles/carousel_cards_extra_large/public/2021-03/Amanoi_Wellness-Overview_5.jpg?itok=Qi2DiXBy",
      topic: "experiences",
      title: "Wellness Pool Villa Experience",

      content:
        "Amanoi’s two unique Wellness Pool Villas are designed for those who wish to dedicate their stay to wellness. Enjoy treatments, therapies and movement classes in consummate privacy without leaving the waterside Lake Wellness Pool Villa or the secluded Forest Wellness Pool Villa.",
    },
    {
      image:
        "https://www.aman.com/sites/default/files/styles/carousel_cards_slim_extra_large/public/2023-03/Amanoi-Resort.jpg?itok=2D9n86OT",
      topic: "experiences",
      title: "Family Activities",
      content:
        "With a daily programme of activities from coconut-leaf weaving and sand sculpture, to beach volleyball tournaments, fishing excursions and movie nights, Amanoi ensures that children and families make the best of memories together.",
    },
  ];
  return (
    <div className={styles.container}>
      <div>
        <div
          className={styles.activity__container}
          style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
        >
          {activities.map((item, index) => (
            <Activity
              key={index}
              image={item.image}
              topic={item.topic}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
      <div>
        <div
          className={styles.activity__container}
          style={{ gridTemplateColumns: "2fr 1fr" }}
        >
          {activities2.map((item, index) => (
            <Activity
              key={index}
              image={item.image}
              topic={item.topic}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
