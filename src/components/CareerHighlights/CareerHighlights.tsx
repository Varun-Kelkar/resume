import React from "react";
import styles from "./CareerHighlights.module.scss";

const highlights = [
  {
    text: "Lead the design and implementation of a comprehensive Microfrontend Architecture for all company applications. This initiative involved meticulously migrating existing applications to the new architecture resulting in,",
    highlight: "Microfrontend Architecture",
    outcomes: ["enhanced modularity", "scalability", "overall performance"],
  },
  {
    text: "Spearheaded the development of a cutting-edge Low-Code Solution to streamline application development processes. By leveraging innovative technologies and industry best practices, I designed and implemented a user-friendly platform that empowers teams to rapidly build and deploy applications with minimal coding requirements. This initiative significantly -",
    highlight: "Low-Code Solution",
    outcomes: ["reduced development time", "increased productivity", "agility"],
  },
  {
    text: "Designed and implemented the Validation Rules feature, enabling users to add validations directly on the UI components through the interface itself. This significantly - ",
    highlight: "Validation Rules",
    outcomes: [
      "improved user experience",
      "reduced need for generating new builds",
      "enhanced flexibility in application development",
    ],
  },
  {
    text: "Played a key role in the development of a comprehensive Design System, ensuring consistency and efficiency across all applications. This initiative involved creating reusable components, documenting them, establishing design guidelines, and implementing best practices for UI/UX design.",
    highlight: "Design System",
    outcomes: ["enhanced consistency", "improved development efficiency"],
  },

  {
    text: "Played a Scrum Master role to ensure efficient and collaborative development processes.",
    highlight: "Scrum Master",
    outcomes: [],
  },
];
const CareerHighlights = () => {
  return (
    <ul className={styles.content}>
      {highlights.map((highlight, index) => (
        <li key={index}>
          {highlight.text.split(highlight.highlight).map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <strong className={styles.highlight}>
                  {highlight.highlight}
                </strong>
              )}
            </span>
          ))}
          {highlight.outcomes.length > 0 && (
            <ul className={styles.outcomes}>
              {highlight.outcomes.map((outcome, i) => (
                <li key={i}>{outcome}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default CareerHighlights;
