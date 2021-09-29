import { useState } from "react";
import Door from "../tmp/Door";
import { createDoors, refreshDoors } from "../functions/door";
import Link from "next/link";

import styles from "../styles/Game.module.css";

export default function Game() {
  const [doors, setDoors] = useState(createDoors(3, 2));

  function renderDoors() {
    return doors.map((door) => {
      return (
        <Door
          key={door.number}
          value={door}
          onChange={(newDoor) => setDoors(refreshDoors(doors, newDoor))}
        />
      );
    });
  }

  return (
    <div className={styles.game}>
      <div className={styles.doors}>{renderDoors()}</div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Reset Game</button>
        </Link>
      </div>
    </div>
  );
}
