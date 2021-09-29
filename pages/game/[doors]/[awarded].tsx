import { useEffect, useState } from "react";
import Door from "../../../tmp/Door";
import { createDoors, refreshDoors } from "../../../functions/door";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../../../styles/Game.module.css";

export default function Game() {
  const router = useRouter();
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    const doors = +router.query.doors;
    const awarded = +router.query.awarded;
    setDoors(createDoors(doors, awarded));
  }, [router?.query]);

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
