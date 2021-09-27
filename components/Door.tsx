import DoorModel from "../model/door";
import styles from "../styles/Door.module.css";

interface DoorProps {
  door: DoorModel;
}

export default function Door({ door }: DoorProps) {
  const selected = door.selected ? styles.selected : "";

  return (
    <div className={styles.area}>
      <div className={`${styles.frame} ${selected}`}>
        <div className={styles.door}>
          <div className={styles.number}>{door.number}</div>
          <div className={styles.handle}></div>
        </div>
      </div>
      <div className={styles.ground}></div>
    </div>
  );
}
