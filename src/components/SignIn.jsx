import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from '../../assets/icons/logo_blanc.png';
import styles from '../styles/App.module.css';
import '../styles/global.css';

export default function SignIn() {
  const [LogEmail, setLogEmail] = useState('');
  const [LogPassword, setLogPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/home');
    }
  }, [navigate]);

  const login = () => {
    const formData = new URLSearchParams();
    formData.append('email', LogEmail);
    formData.append('password', LogPassword);

    fetch('http://localhost:3000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors de la connexion');
        }
        return response.json();
      })
      .then((data) => {
        if (data.name) {
          localStorage.setItem('authName', data.name);
        }
        if (data.id) {
          localStorage.setItem('authId', data.id);
        }
        if (data.token) {
          localStorage.setItem('authToken', data.token);
          return navigate('/home');
        }
        throw new Error('Token non trouvé dans la réponse');
      })
      .catch((error) => {
        console.error('Erreur:', error);
      });
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
          <p className={styles.CredentialsText}>Your email :</p>
          <input
            type="text"
            placeholder="email"
            className={styles.CredentialsField}
            onChange={(e) => setLogEmail(e.target.value)}
            value={LogEmail}
          />
          <p className={styles.CredentialsText}>Your password :</p>
          <input
            type="password"
            placeholder="password"
            className={styles.CredentialsField}
            onChange={(e) => setLogPassword(e.target.value)}
            value={LogPassword}
          />
          <button className={styles.LoginButton} type="button" onClick={login}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
