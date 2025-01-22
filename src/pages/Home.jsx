import Navigation from '../components/Navigation';
import styles from '../styles/Header.module.css';

export default function Home() {
  const Name = localStorage.getItem('authName');
  // const Id = localStorage.getItem('authId');
  return (
    <div>
      <Navigation />
      <h1 className={styles.title}>Home Page</h1>
      <div className={styles.PageContent}>
        <h2 className={styles.SectionManager}>Hello {Name} !</h2>
      </div>
    </div>
  );
}
