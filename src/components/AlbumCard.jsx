import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useValue } from "../albumContext";
// import { useValue } from "../itemContext";

function AlbumCard({ id, name, price }) {
  const { handleAdd, handleRemove } = useValue();
  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}> {price}</div>
      <div className={styles.itemButtonsWrapper}>
      <button className={styles.itemButton} onClick={() => {
        // console.log(id, name, price)
        handleAdd({id, name, price})}}>
          Edit
        </button>
        <button
          className={styles.itemButton}
          onClick={() => handleRemove({id, price})}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default AlbumCard;
