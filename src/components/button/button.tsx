import React from 'react';

import styles from './button.module.scss';

interface Props {
    text: string;
    onClick?: () => {};
    icon?: string;
    classes?: string[];
    iconColor?: string
}

const Button: React.FC<Props> = ({ text, onClick, classes }): JSX.Element => {
    let baseClass = [styles.Button];
    if (!!classes?.length) {
        baseClass = [...baseClass, ...classes];
    }
   return <div className={styles.ButtonWrapper}>
    <button className={baseClass.join(' ')} onClick={onClick}>{text}</button>
    </div>
}

export default Button;