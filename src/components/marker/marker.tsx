import React from 'react';
import styles from './marker.module.scss';
interface Props {
    movesLeft: number;
    success: boolean;
    showResult: boolean;
}

const Marker: React.FC<Props> = ({ movesLeft, success, showResult }) => {
    const successMessage = success ? <div>You win!</div> :
        <div>You loose!</div>

    return <div className={styles.MarkerInfo}>
        {showResult && successMessage}
        <div>MOVES LEFT: {movesLeft}</div>
    </div>
};

export default Marker;