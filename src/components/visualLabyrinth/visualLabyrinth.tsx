// eslint-disable-next-line
import React from "react";
import Block from "../block/block";
import styles from "./visualLabyrinth.module.scss";
import { Cell } from "../../shared/models/cell";

interface Props {
  matrix: any;
}

const VisualLabyrinth: React.FC<Props> = ({ matrix }) =>
  matrix.map((row: Array<Cell>, i: number) => (
    <div key={i} className={styles.Row}>
      {row.map((col: any, j: number) => (
        <Block data-testid='block' key={i + j} {...col} />
      ))}
    </div>
  ));
export default VisualLabyrinth;
