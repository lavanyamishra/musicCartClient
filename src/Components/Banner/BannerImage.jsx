import React from "react";
import styles from "./Banner.module.css";
import bannerfinal from '../../../public/images/bannerfinal.png'
const BannerImage = () => {

  return (
    <div className={styles.banner_Image_container}>
      <img src={bannerfinal} alt="" />
    </div>
  );
};

export default BannerImage;
