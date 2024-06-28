import React from "react";
import styles from "../styles/Navbar.module.css";
import { useValue } from "../albumContext";
// import { useValue } from "../itemContext";

function Navbar() {
  const {toggleAlbumFormView} = useValue();
  return (
    <div className={styles.container}>
      <div className={styles.buttonsWrapper}>
        <button className={styles.button} onClick={toggleAlbumFormView}>Add Album</button>
      </div>
    </div>
  );
}

export default Navbar;
