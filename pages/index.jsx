import Award from "../components/Award";
import Door from "../components/Door";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <Door />
      <Door selected />
    </div>
  );
}
