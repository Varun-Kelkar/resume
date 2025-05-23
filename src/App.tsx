import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <div className={styles.title}>Varun Kelkar</div>
        <span className={styles.subTitle}>Software Engineer</span>
      </header>
      <main className={styles.AppContent}>
        <section className={styles.mainSection}>
          <section className={styles.profile}>
            <div className={styles.contentWrapper}>
              <header className={styles.sectionHeader}>
                <h3> 👤 Profile</h3>
              </header>
              <p className={styles.content}>
                Software Engineer with a strong background in&nbsp;
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener,noreferrer"
                  key="website"
                >
                  JavaScript
                </a>
                ,&nbsp;
                <a
                  href="https://lit.dev/"
                  target="_blank"
                  rel="noopener,noreferrer"
                  key="website"
                >
                  Web Components
                </a>
                ,&nbsp;
                <a
                  href="https://react.dev/"
                  target="_blank"
                  rel="noopener,noreferrer"
                  key="website"
                >
                  React
                </a>
                &nbsp; & &nbsp;
                <a
                  href="https://micro-frontends.org/"
                  target="_blank"
                  rel="noopener,noreferrer"
                  key="website"
                >
                  Microfrontends
                </a>
                . Experienced in delivering high-quality code and collaborating
                with cross-functional teams to drive project success. A
                professional with a keen interest in honing skills and expertise
                in Software Development.
              </p>
            </div>
          </section>
          <section className={styles.experience}>
            <div className={styles.contentWrapper}>
              <header className={styles.sectionHeader}>
                <h3> 💼 Employment History</h3>
              </header>
              <ul className={styles.content}>
                <li>
                  <h4>
                    Senior Software Engineer @&nbsp;
                    <a
                      href="https://conga.com/"
                      target="_blank"
                      rel="noopener,noreferrer"
                      key="website"
                    >
                      Conga
                    </a>
                  </h4>
                  <span className={styles.subTitle}>July 2023 - Present</span>
                </li>
                <li>
                  <h4>
                    Software Engineer @&nbsp;
                    <a
                      href="https://www.humancloud.ltd/"
                      target="_blank"
                      rel="noopener,noreferrer"
                      key="website"
                    >
                      Humancloud Technologies Pvt Ltd.
                    </a>
                  </h4>
                  <span className={styles.subTitle}>June 2020 - June 2023</span>
                </li>
              </ul>
            </div>
          </section>
          <section className={styles.careerHighlights}>
            <div className={styles.contentWrapper}>
              <header className={styles.sectionHeader}>
                <h3> ⭐ Career Highlights</h3>
              </header>
              <ul className={styles.content}>
                <li>
                  Lead the design and implementation of a&nbsp;
                  <strong>comprehensive microfrontend architecture</strong> for
                  all company applications. This initiative involved
                  meticulously migrating existing applications to the new
                  architecture, resulting in enhanced modularity, scalability,
                  and overall performance.
                </li>
                <li>
                  Spearheaded the development of a cutting-edge&nbsp;
                  <strong>low-code solution </strong> to streamline application
                  development processes. By leveraging innovative technologies
                  and industry best practices, I designed and implemented a
                  user-friendly platform that empowers teams to rapidly build
                  and deploy applications with minimal coding requirements. This
                  initiative&nbsp;
                  <strong>
                    significantly reduced development time and costs
                  </strong>
                  &nbsp;while &nbsp;
                  <strong>increasing productivity and agility</strong>
                  &nbsp; across the organization.
                </li>
                <li>
                  Designed and implemented the <strong>UI Rules feature</strong>
                  , enabling users to add validations directly on the UI
                  components through the interface itself. This significantly
                  &nbsp;<strong>improved user experience</strong> by providing a
                  highly customizable and responsive UI solution.
                </li>
                <li>
                  Played a <strong>Scrum Master role</strong> to ensure
                  efficient and collaborative development processes.
                </li>
                <li>
                  Played a <strong>pivotal role </strong>in the development of
                  our&nbsp;
                  <strong>
                    web components & authored extensive and user-friendly
                    documentation
                  </strong>
                  for the web components library.
                </li>
              </ul>
            </div>
          </section>
          <section className={styles.education}>
            <div className={styles.contentWrapper}>
              <header className={styles.sectionHeader}>
                <h3> 🎓 Education</h3>
              </header>
              <ul className={styles.content}>
                <li>
                  <h4> Master's in Computer Applications at MES's IMCC </h4>
                  <span className={styles.subTitle}>Jun, 2018 - May, 2021</span>
                </li>
                <li>
                  <h4>
                    Bachelor's in Computer Science at MES Abasaheb Garware
                    College
                  </h4>
                  <span className={styles.subTitle}>Jun, 2015 - May, 2018</span>
                </li>
              </ul>
            </div>
          </section>
        </section>
        <aside className={styles.sidebar}>
          <section className={styles.personalDetails}>
            <div className={styles.contentWrapper}>
              <header className={styles.sectionHeader}>
                <h3> 📇 Personal Details</h3>
              </header>
              <div className={styles.content}>
                <div>Pune, India</div>
                <div>( +91 ) 8308821602</div>
                <div>
                  <a
                    href="mailto:vnkelkar11@gmail.com"
                    target="_blank"
                    rel="noopener,noreferrer"
                  >
                    vnkelkar@gmail.com
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/varun-kelkar-36178b135/"
                    target="_blank"
                    rel="noopener,noreferrer"
                    key="website"
                  >
                    LinkedIn
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/Varun-Kelkar"
                    target="_blank"
                    rel="noopener,noreferrer"
                    key="website"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.skills}>
            <div className={styles.contentWrapper}>
              <header className={styles.sectionHeader}>
                <h3> 🚀 Skills</h3>
              </header>
              <div className={styles.skillsList}>
                <span className={`${styles.chip} ${styles.blue}`}>React</span>
                <span className={`${styles.chip} ${styles.green}`}>NextJS</span>
                <span className={`${styles.chip} ${styles.yellow}`}>
                  Lit Web Components
                </span>
                <span className={`${styles.chip} ${styles.aqua}`}>Webpack</span>
                <span className={`${styles.chip} ${styles.green}`}>
                  Javascript
                </span>
                <span className={`${styles.chip} ${styles.blue}`}>
                  Typescript
                </span>
                <span className={`${styles.chip} ${styles.yellow}`}>
                  GraphQL
                </span>
              </div>
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}

export default App;
