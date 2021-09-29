import { useEffect, useState } from "react";
import Door from "../../../components/Door";
import { createDoors, refreshDoors } from "../../../functions/door";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../../../styles/Game.module.css";

export default function Game() {
  const router = useRouter();
  const [doors, setDoors] = useState([]);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const doors = +router.query.doors;
    const awarded = +router.query.awarded;

    const validDoors = doors >= 3 && doors <= 100;
    const validAward = awarded >= 1 && awarded <= doors;

    setIsValid(validDoors && validAward);
  }, [doors]);

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
      <div className={styles.doors}>
        {isValid ? renderDoors() : <h1>Insert valid values!</h1>}
      </div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Reset Game</button>
        </Link>
      </div>
    </div>
  );
}
