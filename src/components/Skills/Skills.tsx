import styles from "./Skills.module.scss";
const skills = [
  { name: "React", color: "blue" },
  { name: "NextJS", color: "green" },
  { name: "Lit Web Components", color: "yellow" },
  { name: "Webpack", color: "aqua" },
  { name: "Microfrontends", color: "yellow" },
  { name: "Javascript", color: "green" },
  { name: "Typescript", color: "blue" },
  { name: "GraphQL", color: "peach-coral" },
];
const Skills = () => {
  return (
    <div className={styles.skillsList}>
      {skills.map(({ name, color }) => (
        <span key={name} className={`${styles.chip} ${styles[color]}`}>
          {name}
        </span>
      ))}
    </div>
  );
};

export default Skills;
