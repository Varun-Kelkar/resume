import styles from "./Section.module.scss";

type SectionProps = {
  children?: React.ReactNode;
  title?: string;
};

const Section = ({ children, title }: SectionProps) => {
  return (
    <section className={styles.sectionContainer}>
      <header className={styles.header}>
        <h3>{title}</h3>
      </header>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default Section;
