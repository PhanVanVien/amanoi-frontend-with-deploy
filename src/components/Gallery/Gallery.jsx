import React, { useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import "./style.css";
import { IoCloseOutline } from "react-icons/io5";
import {
  addRoom,
  deleteImageFromGallery,
  getGallery,
} from "../Utils/ApiFunctions.js";
import { toast } from "react-toastify";
import CustomButton from "../Common/CustomButton";
import { FiUpload } from "react-icons/fi";
import Modal from "../Common/Modal";
import InfiniteScroll from "react-infinite-scroll-component";
import PulseLoader from "react-spinners/PulseLoader";
import Masonry from "react-masonry-css";

const Gallery = () => {
  const [limit, setLimit] = useState(8);
  const baseURL = "http://localhost:8080/image/fileSystem/";
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getGallery(page, limit);
      setGallery(data);
    } catch (error) {
      console.error("Error fetching gallery data:", error);
    }
  };

  const fetchMore = async () => {
    setIsLoading(true);
    try {
      const data = await getGallery(page + 1, limit);
      if (data.length === 0) {
        setHasMore(false);
      } else {
        setGallery((rest) => [...rest, ...data]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={styles.out_container}
      >
        <h1 className={styles.title}>Explore Amanoi</h1>
        <div className={styles.out_container}>
          <InfiniteScroll
            dataLength={gallery.length}
            next={fetchMore}
            hasMore={hasMore}
            loader={
              <PulseLoader
                cssOverride={{ textAlign: "center" }}
                color="#303030"
                size={10}
              />
            }
            scrollThreshold={0.5}
            className={styles.custom}
          >
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {gallery.map((item, index) => (
                <div key={index} className={styles.box}>
                  <img
                    className={styles.image}
                    src={`${baseURL}${item}`}
                    style={{ maxWidth: "100%" }}
                    alt={`Image ${index + 1}`}
                  />
                </div>
              ))}
            </Masonry>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};
export default Gallery;
