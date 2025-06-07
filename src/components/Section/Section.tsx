import { motion } from "motion/react";
import styles from "./Section.module.scss";

type SectionProps = {
  children?: React.ReactNode;
  title?: string;
};

const Section = ({ children, title }: SectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.6, bounce: 0.4 },
      }}
    >
      <section className={styles.sectionContainer}>
        <header className={styles.header}>
          <h3>{title}</h3>
        </header>
        <div className={styles.content}>{children}</div>
      </section>
    </motion.div>
  );
};

export default Section;
