import styles from './job_card.module.scss';

interface JobCardProps {
    jobs: Job[],
    link: string
}

interface Job {
    title: string,
    company: string,
    start: string,
    end: string,
    description: string
}

export default function JobCard({ jobs, link }: JobCardProps) {
    return (
        <a href={link} target="_blank">
            <div className={styles.container}>
                {jobs.map((job, idx) => (
                    <div className={styles.job_container} key={idx}>
                        <div className={styles.dates}>{job.start} &mdash; {job.end}</div>
                        <div className={styles.content}>
                            <div className={styles.title_container}>
                                <div className={styles.title}>{job.title}</div>
                                <div className={styles.company}>{job.company}</div>
                            </div>
                            <div>{job.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </a>
    )
}