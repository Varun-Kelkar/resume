import styles from "./PersonalDetails.module.scss";

export default function PersonalDetails() {
  return (
    <address className={styles.content}>
      <div className={styles.item}>Pune, India</div>
      <div className={styles.item}>
        <a href="tel:+918308821602" className={styles.link}>
          ( +91 ) 8308821602
        </a>
      </div>
      <div className={styles.item}>
        <a href="mailto:vnkelkar11@gmail.com" className={styles.link}>
          vnkelkar11@gmail.com
        </a>
      </div>
      <div className={styles.item}>
        <a
          href="https://www.linkedin.com/in/varun-kelkar-36178b135/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          aria-label="LinkedIn profile"
        >
          LinkedIn
        </a>
      </div>
      <div className={styles.item}>
        <a
          href="https://github.com/Varun-Kelkar"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          aria-label="GitHub profile"
        >
          GitHub
        </a>
      </div>
    </address>
  );
}
