import Card from "../components/Card";
import Link from "next/link";

import styles from "../styles/Form.module.css";
import NumberInput from "../components/NumberInput";
import { useState } from "react";

export default function Form() {
  const [doorsQty, setDoorsQty] = useState(3);
  const [awarded, setAwarded] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput
            value={doorsQty}
            onChange={(newQty) => setDoorsQty(newQty)}
            text="Doors Qty?"
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput
            value={awarded}
            onChange={(newDoor) => setAwarded(newDoor)}
            text="Awarded Door"
          />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/${doorsQty}/${awarded}`}>
            <h2 className={styles.link}>Start</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
