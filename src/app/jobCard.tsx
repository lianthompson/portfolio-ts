import styles from './job_card.module.scss';

interface JobCardProps {
    title: string,
    start: string,
    end: string,
    description: string
}

export default function JobCard ({title, start, end, description}: JobCardProps) {
    return (
        <div className={styles.container}>
        <div className={styles.dates}>{start} &mdash; {end}</div>
        <div className={styles.content}>
            <div className={styles.title}>{title}</div>
            <div>{description}</div>
        </div>
    </div>
    )
}