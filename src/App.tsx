import styles from "./App.module.scss";
import CareerHighlights from "./components/CareerHighlights/CareerHighlights";
import Education from "./components/Education/Education";
import EmploymentHistory from "./components/EmploymentHistory/EmploymentHistory";
import HobbiesAndPassions from "./components/HobbiesAndPassions/HobbiesAndPassions";
import Languages from "./components/Languages/Languages";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import Profile from "./components/Profile/Profile";
import Section from "./components/Section/Section";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <div className={styles.title}>Varun Kelkar</div>
        <span className={styles.subTitle}>Software Engineer</span>
      </header>
      <main className={styles.AppContent}>
        <section className={styles.mainSection}>
          <Section title="👤 Profile">
            <Profile />
          </Section>
          <Section title="💼 Employment History">
            <EmploymentHistory />
          </Section>
          <Section title="🚀 Skills">
            <Skills />
          </Section>
          <Section title="⭐ Career Highlights">
            <CareerHighlights />
          </Section>
          <Section title="🎓 Education">
            <Education />
          </Section>
        </section>
        <aside className={styles.sidebar}>
          <Section title="📇 Personal Details">
            <PersonalDetails />
          </Section>
          <Section title="🌐 Languages">
            <Languages />
          </Section>
          <Section title="🎨 Hobbies & Passions">
            <HobbiesAndPassions />
          </Section>
        </aside>
      </main>
    </div>
  );
}

export default App;
