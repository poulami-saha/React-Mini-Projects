import { useState } from "react";
import styles from "./counter.module.scss";
const Counter = () => {
  const [value, setValue] = useState<number>(0);
  const [interval, setInterval] = useState<number>(1);

  const decrementHandler = () => {
    setValue((value) => value - interval);
  };
  const incrementHandler = () => {
    setValue((value) => value + interval);
  };

  const resetHandler = () => {
    setValue(0);
    setInterval(1);
  };
  return (
    <div className={styles.App}>
      <p>{value}</p>
      <div className={styles.buttons}>
        <div className={styles.button} onClick={decrementHandler}>
          -
        </div>
        <div className={styles.button} onClick={incrementHandler}>
          +
        </div>
      </div>
      <p>
        Increment/Decrement By
        <span>
          <input
            id="interval"
            type="number"
            value={interval}
            onChange={(e) =>
              setInterval((e.target as HTMLInputElement).valueAsNumber)
            }
          />
        </span>
      </p>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Counter;
