// eslint-disable-next-line
import React from "react";

import constants from "../../shared/constants";
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
        <Button text={constants.NEXT_LEVEL} onClick={onNextLevel} />
        <Button text={constants.RESTART_THIS_LEVEL} onClick={onRestartLevel} />
        <Button text={constants.RESTART_GAME} onClick={onRestartGame} />
      </>
    )}
  </div>
);

export default GameControls;
