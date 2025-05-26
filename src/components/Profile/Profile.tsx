import styles from "./Profile.module.scss";

export default function Profile() {
  return (
    <section className={styles.profile}>
      <p>
        Software Engineer with a strong background in&nbsp;
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="JavaScript documentation"
        >
          JavaScript
        </a>
        ,&nbsp;
        <a
          href="https://lit.dev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Web Components documentation"
        >
          Web Components
        </a>
        ,&nbsp;
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="React documentation"
        >
          React
        </a>
        &nbsp;&&nbsp;
        <a
          href="https://micro-frontends.org/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Microfrontends documentation"
        >
          Microfrontends
        </a>
        . Experienced in delivering high-quality code and collaborating with
        cross-functional teams to drive project success. A professional with a
        keen interest in honing skills and expertise in Software Development.
      </p>
    </section>
  );
}
