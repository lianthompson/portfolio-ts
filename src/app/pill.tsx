import styles from './pill.module.scss';

interface Pill {
    text: string
}

export default function Pill({text}: Pill) {
    return (
        <div className={styles.pill_outer_container}>
            <div className={styles.pill_container}>{text}</div>
        </div>
    )
}