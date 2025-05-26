import styles from "./EmploymentHistory.module.scss";

export default function EmploymentHistory() {
  const jobs = [
    {
      title: "Senior Software Engineer",
      company: "Conga",
      companyUrl: "https://conga.com/",
      period: "July 2023 - Present",
    },
    {
      title: "Software Engineer",
      company: "Humancloud Technologies Pvt Ltd.",
      companyUrl: "https://www.humancloud.ltd/",
      period: "June 2020 - June 2023",
    },
  ];

  return (
    <div className={styles.content}>
      {jobs.map((job, index) => (
        <article key={index} className={styles.jobItem}>
          <h4>
            {job.title} @{" "}
            <a
              href={job.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${job.company} website`}
            >
              {job.company}
            </a>
          </h4>
          <span className={styles.subTitle}>{job.period}</span>
        </article>
      ))}
    </div>
  );
}
