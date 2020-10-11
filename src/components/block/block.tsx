import React from 'react';
import styles from './block.module.scss';

interface Props {
    //delete this one
    value?: string;
    isPlayerHere?: boolean;
    isDisabled?: boolean;
    isFinish?: boolean;
    isStart?: boolean;
}

const Block: React.FC<Props> = ({
    value,
    isDisabled = false,
    isFinish = false,
    isStart = false,
    isPlayerHere = false,
}) => {
    let initialStyles = [styles.Block];

    if (isDisabled) {
        initialStyles.push(styles.Disabled);
    }

    if (isFinish) {
        initialStyles.push(styles.Finish);
    }

    if (isStart) {
        initialStyles.push(styles.Start);
    }

    return <div className={initialStyles.join(' ')}>{isPlayerHere && <div data-testid="player" className={styles.Player}>{value}</div>}</div>
};

export default Block;