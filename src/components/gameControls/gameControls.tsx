// eslint-disable-next-line
import React from "react";

import Button from "../button/button";
import styles from "./gameControls.module.scss";

interface Props {
  isPlaying: boolean;
  onNextLevel: () => void;
  onRestartLevel: () => void;
  onRestartGame: () => void;
}

const GameControls: React.FC<Props> = ({
  isPlaying,
  onNextLevel,
  onRestartLevel,
  onRestartGame,
}) => (
  <div data-testid="game-controls" className={styles.NewGameButtons}>
    {!isPlaying && (
      <>
        <Button text="Next level" onClick={onNextLevel} />
        <Button text="Restart this level" onClick={onRestartLevel} />
        <Button text="Restart game" onClick={onRestartGame} />
      </>
    )}
  </div>
);

export default GameControls;
