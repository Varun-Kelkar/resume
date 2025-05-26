import styles from "./Languages.module.scss";
const languages = ["English", "Hindi", "Marathi"];
const Languages = () => {
  return (
    <ul className={styles.content}>
      {languages.map((language, index) => (
        <li key={index} className={styles.languageItem}>
          {language}
        </li>
      ))}
    </ul>
  );
};

export default Languages;
