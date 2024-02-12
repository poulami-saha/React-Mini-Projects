import { useMemo, useState } from "react";
import Star from "./Star";

const StarRating: React.FC<{ value: number; total: number }> = ({
  value,
  total,
}) => {
  const [rating, setRating] = useState<number>(value || 0);
  const [selection, setSelection] = useState(0);

  const starArray = useMemo(() => Array.from({ length: total }), [total]);

  const onHover = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    setSelection(Number(target.dataset.starId) ?? 0);
  };

  const onLeave = () => {
    setSelection(0);
  };

  const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    setRating(Number(target.dataset.starId) ?? 0);
  };

  return (
    <div onMouseLeave={onLeave} onMouseOver={onHover} onClick={onClick}>
      {starArray.map((_, index) => (
        <Star
          marked={(selection || rating) > index}
          starId={index + 1}
          key={`star_${index + 1}`}
        />
      ))}
    </div>
  );
};
export default StarRating;
