// eslint-disable-next-line
import React from "react";
import styles from "./block.module.scss";

interface Props {
  isPlayerHere?: boolean;
  isWall?: boolean;
  isFinish?: boolean;
  isStart?: boolean;
}

const Block: React.FC<Props> = ({
  isWall = false,
  isFinish = false,
  isStart = false,
  isPlayerHere = false,
}) => {
  const initialStyles = [styles.Block];

  if (isWall) {
    initialStyles.push(styles.Disabled);
  }
  if (isFinish) {
    initialStyles.push(styles.Finish);
  }
  if (isStart) {
    initialStyles.push(styles.Start);
  }

  return (
    <div data-testid="block" className={initialStyles.join(" ")}>
      {isPlayerHere && <div data-testid="player" className={styles.Player} />}
    </div>
  );
};

export default Block;
