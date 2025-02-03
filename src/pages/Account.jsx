import Navigation from '../components/Navigation';
import styles from '../styles/Header.module.css';

export default function Account() {
  return (
    <div>
      <Navigation />
      <h1 className={styles.title}>Account Page</h1>
      <div className={styles.PageContent}></div>
    </div>
  );
}
