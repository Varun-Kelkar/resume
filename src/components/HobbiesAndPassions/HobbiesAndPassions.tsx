import styles from "./HobbiesAndPassions.module.scss";

export default function HobbiesAndPassions() {
  const hobbies = [
    {
      name: "Badminton",
      color: "blue",
    },
    {
      name: "Coding",
      color: "aqua",
    },
    {
      name: "Traveling",
      color: "green",
    },
    {
      name: "Reading",
      color: "yellow",
    },
    {
      name: "Music",
      color: "peach-coral",
    },
    {
      name: "Cycling",
      color: "blue",
    },
    {
      name: "Cooking",
      color: "green",
    },
  ];

  return (
    <ul className={styles.hobbyList}>
      {hobbies.map((hobby, index) => (
        <li
          key={index}
          className={`${styles.hobbyItem} ${styles[hobby.color]}`}
        >
          {hobby.name}
        </li>
      ))}
    </ul>
  );
}
