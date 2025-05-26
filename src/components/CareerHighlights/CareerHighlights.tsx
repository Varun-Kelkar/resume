import React from "react";
import styles from "./CareerHighlights.module.scss";

const highlights = [
  {
    text: "Lead the design and implementation of a comprehensive microfrontend architecture for all company applications. This initiative involved meticulously migrating existing applications to the new architecture resulting in,",
    highlight: "comprehensive microfrontend architecture",
    outcomes: ["enhanced modularity", "scalability", "overall performance"],
  },
  {
    text: "Spearheaded the development of a cutting-edge low-code solution to streamline application development processes. By leveraging innovative technologies and industry best practices, I designed and implemented a user-friendly platform that empowers teams to rapidly build and deploy applications with minimal coding requirements. This initiative significantly -",
    highlight: "low-code solution",
    outcomes: ["reduced development time", "increased productivity", "agility"],
  },
  {
    text: "Designed and implemented the UI Rules feature, enabling users to add validations directly on the UI components through the interface itself. This significantly - ",
    highlight: "UI Rules feature",
    outcomes: [
      "improved user experience",
      "reduced need for generating new builds",
      "enhanced flexibility in application development",
    ],
  },
  {
    text: "Played a pivotal role in the development of our web components and authored extensive and user-friendly documentation for the web components library.",
    highlight: "web components",
    outcomes: ["enhanced reusability", "improved developer experience"],
  },
  {
    text: "Played a Scrum Master role to ensure efficient and collaborative development processes.",
    highlight: "Scrum Master role",
    outcomes: [],
  },
];
const CareerHighlights = () => {
  return (
    <ul className={styles.content}>
      {highlights.map((highlight, index) => (
        <li key={index}>
          {highlight.text.split(highlight.highlight).map((part, i, arr) => (
            <>
              {part}
              {i < arr.length - 1 && (
                <strong className={styles.highlight}>
                  {highlight.highlight}
                </strong>
              )}
            </>
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
