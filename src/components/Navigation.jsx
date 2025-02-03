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

  const handleNavigateGestion = () => {
    navigate('/gestion');
  };

  const handleNavigateAccount = () => {
    navigate('/account');
  };

  const handleNavigateSettings = () => {
    navigate('/settings');
  };

  const logout = () => {
    const id = localStorage.getItem('authId');
    const requestOptions = {
      method: 'PUT',
      redirect: 'follow',
    };

    fetch(`http://localhost:3000/users/logout/${id}`, requestOptions)
      .then((response) => response.text())
      .catch((error) => console.log('error', error));

    localStorage.setItem('authId', '');
    localStorage.setItem('authName', '');
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
          onClick={handleNavigateGestion}
          style={{ cursor: 'pointer' }}
          className={styles.elements}
        >
          Management
        </li>
        {/* eslint-disable-next-line */}
        <li
          onClick={handleNavigateAccount}
          style={{ cursor: 'pointer' }}
          className={styles.elements}
        >
          Account
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
