import { useEffect, useState } from "react";
import styles from "./game.module.scss";

const Game = () => {
  const [boxes, setBoxes] = useState(
    new Array(9).fill({
      disabled: false,
      value: "",
    })
  );

  const [turnO, setTurnO] = useState(true);
  const [winner, setWinner] = useState(false);

  const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
  ];

  const clickHandler = (index) => {
    const box = {
      disabled: true,
      value: turnO ? "O" : "X",
      index: index,
    };
    boxes[index] = box;
    setBoxes((boxValues) => [...boxValues]);
    setTurnO((turnO) => !turnO);
  };

  const handleWinner = () => {
    setWinner(true);
    setBoxes((boxes) =>
      boxes.map((box) => {
        return {
          disabled: true,
          value: box.value,
          index: box.index,
        };
      })
    );
  };

  const resetGame = () => {
    setTurnO((turnO) => !turnO);
    boxes.forEach((box) => {
      box.disabled = false;
      box.value = "";
      box.index = box.index;
    });
    setBoxes((boxes) => [...boxes]);
    setWinner((winner) => {
      if (winner) {
        winner = false;
      }
    });
  };
  useEffect(() => {
    for (let pattern of winningPattern) {
      let pos1Val = boxes[pattern[0]].value;
      let pos2Val = boxes[pattern[1]].value;
      let pos3Val = boxes[pattern[2]].value;
      if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          return handleWinner();
        }
      }
    }
  }, [boxes]);

  return (
    <div className={styles.container}>
      {winner && (
        <p className={styles.winner}>
          Congratulations, winner is {turnO ? "X" : "O"}
        </p>
      )}
      <button className={styles.button} onClick={resetGame}>
        New Game
      </button>
      <p className={styles.header}>TIC TAC TOE</p>

      <div className={styles.game}>
        {boxes.map((box, index) => {
          return (
            <button
              key={index}
              className={styles.box}
              disabled={box.disabled}
              onClick={() => clickHandler(index)}
            >
              {box.value}
            </button>
          );
        })}
      </div>
      <button className={styles.button} onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};
export default Game;
