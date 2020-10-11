import React from 'react';
import Block from "../../components/block/block";
import styles from './matrix.module.scss';

export const Matrix = (columns: number, rows: number) => {
    return [...Array(columns)].map(() => (
        <div className={styles.Row}>
          {[...Array(rows)].map(() => (
            <Block/>
          ))}
        </div>
      ))
}

export default Matrix;