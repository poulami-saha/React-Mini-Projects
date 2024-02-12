import styles from "./Star.module.scss";
const Star: React.FC<{ marked: boolean; starId: number }> = ({
  marked,
  starId,
}) => {
  return (
    <span data-star-id={starId} className={styles.star} role="button">
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};
export default Star;
