import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/icons/logo_blanc.png';
import styles from '../styles/App.module.css';
import '../styles/global.css';

export default function SignIn() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div className={styles.container}>
      <div className={styles.WelcomeContent}>
        <img src={Logo} alt="Logo Sushi" className={styles.LogoSushi} />
        <div className={styles.LoginModal}>
          <h1 className={styles.LoginSection}>
            Welcome on the Administrator Panel
          </h1>
          <h2 className={`${styles.LoginSection} ${styles.separator}`}>
            Please Login to continue
          </h2>
          <p className={styles.CredentialsText}>Your username :</p>
          <input
            type="text"
            placeholder="username"
            className={styles.CredentialsField}
          />
          <p className={styles.CredentialsText}>Your password :</p>
          <input
            type="password"
            placeholder="password"
            className={styles.CredentialsField}
          />
          <button
            className={styles.LoginButton}
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
