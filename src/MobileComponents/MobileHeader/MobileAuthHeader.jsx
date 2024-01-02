import React from "react";
import styles from "./MobileHeader.module.css";
import phone from '../../../public/images/phone.png'
const MobileAuthHeader = () => {
  return (
    <>
      <div className={styles.header_container}>
        <div className={styles.logo_div}>
          <img src={phone} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default MobileAuthHeader;
