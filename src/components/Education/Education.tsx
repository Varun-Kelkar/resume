import styles from "./Education.module.scss";

export default function Education() {
  return (
    <div className={styles.educationList}>
      <article className={styles.educationItem}>
        <header>
          <h4>Master's in Computer Applications at MES's IMCC</h4>
        </header>
        <time className={styles.subTitle}>Jun, 2018 - May, 2021</time>
      </article>
      <article className={styles.educationItem}>
        <header>
          <h4>
            Bachelor's in Computer Science at MES Abasaheb Garware College
          </h4>
        </header>
        <time className={styles.subTitle}>Jun, 2015 - May, 2018</time>
      </article>
    </div>
  );
}
