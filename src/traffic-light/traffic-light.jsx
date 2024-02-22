import { useEffect, useState } from "react";
import styles from "./traffic.module.scss";
import config from "./config";

const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState("red");
  const [currentDuration, setCurrentDuration] = useState(
    config[currentLight].duration
  );

  useEffect(() => {
    let timerId;
    if (currentDuration <= 0) {
      clearInterval(timerId);
      setCurrentLight(config[currentLight].next);
      setCurrentDuration(config[config[currentLight].next].duration);
    } else {
      timerId = setInterval(() => {
        setCurrentDuration((prevDuration) => prevDuration - 1000);
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [currentLight, currentDuration]);

  return (
    <div className={styles.container}>
      <div className={styles.traffic}>
        {Object.keys(config).map((light) => {
          return <div
            key={config[light].id}
            className={styles.light}
            style={{ background: currentLight === light ? light : "" }}
          ></div>;
        })}
      </div>
      <div className={styles.countDown}>
        <span> {Math.floor(currentDuration / 1000)} Seconds</span>
      </div>
    </div>
    
  );
};

export default TrafficLight;
