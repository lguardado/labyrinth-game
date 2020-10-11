import React from 'react';
import Block from '../block/block';
import styles from './visualLabyrinth.module.scss';

interface Props {
    matrix: any;
}

const VisualLabyrinth: React.FC<Props> = ({ matrix }) => {
    return matrix.map((row: any, i: number) => (
        <div key={i} className={styles.Row}>
            {row.map((col: any, j: number) => (
                <Block key={j} value={`${i}-${j}`} {...col} />
            ))}
        </div>
    ))
}
export default VisualLabyrinth;