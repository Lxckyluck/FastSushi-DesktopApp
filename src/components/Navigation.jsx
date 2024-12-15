import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styles from '../styles/Navigation.module.css';
import Logo from '../../assets/icons/logo_blanc.png';

export default function Navigation() {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/home');
  };
  const handleNavigateProducts = () => {
    navigate('/product');
  };
  const handleNavigateSettings = () => {
    navigate('/settings');
  };

  const logout = () => {
    localStorage.setItem('authToken', '');
    navigate('/');
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        navigate('/');
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [navigate]);

  return (
    <div className={styles.Navigation}>
      <ul>
        {/* eslint-disable-next-line */}
        <li
          onClick={handleNavigateHome}
          style={{ cursor: 'pointer' }}
          className={styles.elements}
        >
          Home
        </li>
        {/* eslint-disable-next-line */}
        <li
          onClick={handleNavigateProducts}
          style={{ cursor: 'pointer' }}
          className={styles.elements}
        >
          Product
        </li>
        {/* eslint-disable-next-line */}
        <li
          onClick={handleNavigateSettings}
          style={{ cursor: 'pointer' }}
          className={styles.elements}
        >
          Settings
        </li>
      </ul>
      <button onClick={logout} className={styles.Logout} type="button">
        Logout
      </button>
      <img src={Logo} alt="Logo Sushi" className={styles.Logo} />
    </div>
  );
}
