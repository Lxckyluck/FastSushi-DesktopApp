import Navigation from '../components/Navigation';
import styles from '../styles/Header.module.css';

export default function Console() {
  return (
    <div>
      <Navigation />
      <h1 className={styles.title}>Gestion Page</h1>
      <div className={styles.PageContent}>
        <h2 className={styles.SectionManager}>User</h2>
        <h2 className={styles.SectionManager}>Product</h2>
        <h2 className={styles.SectionManager}>Order</h2>
      </div>
    </div>
  );
}
