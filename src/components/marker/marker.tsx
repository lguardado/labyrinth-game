// eslint-disable-next-line
import React from "react";

import styles from "./marker.module.scss";
import constants from "../../shared/constants";

interface Props {
  movesLeft: number;
  success: boolean;
  showResult: boolean;
}

const Marker: React.FC<Props> = ({ movesLeft, success, showResult }) => {
  const warningLimit = 10;
  const dangerLimit = 5;

  const successMessage = success ? (
    <div className={styles.Success}>{constants.YOU_WIN}</div>
  ) : (
      <div className={styles.Warning}>{constants.YOU_LOOSE}</div>
    );

  return (
    <div
      className={[
        styles.MarkerInfo,
        movesLeft < warningLimit && movesLeft > dangerLimit
          ? styles.Warning
          : movesLeft <= dangerLimit
            ? styles.Danger
            : "",
      ].join(" ")}
    >
      {showResult && successMessage}
      <div data-testid="moves-left">
        {constants.MOVES_LEFT}:{movesLeft}
      </div>
    </div>
  );
};

export default Marker;
