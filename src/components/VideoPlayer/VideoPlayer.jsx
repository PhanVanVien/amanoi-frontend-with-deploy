import React from "react";
import video from "../../assets/videos/adv.mp4";
import styles from "./VideoPlayer.module.css";
import Content from "../Content/Content";

const VideoPlayer = () => {
  return (
    <div className={styles.container}>
      <video
        autoPlay={true}
        loop
        controls
        muted
        className={styles.video__player}
      >
        <source src={video} />
      </video>
      <Content />
    </div>
  );
};

export default VideoPlayer;
