import Image from "next/image";
import Pill from "./pill";
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
    description: string,
    skills: string[]
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
                                {idx === 0 && <div className={styles.company_container}> <div className={styles.company}>{job.company}</div>
                                 <div className={styles.dash_container}>
                                    <div className={styles.dash_small}></div>
                                    <Image className={styles.arrow} src="/icons8-right-arrow-24.png" alt="resume" height={16} width={16} />
                                </div></div>}
                            </div>
                            <div>{job.description}</div>
                            <div className={styles.skills}>
                                {job.skills?.map((skill, idx) => (
                                    <Pill key={idx} text={skill} />
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </a>
    )
}