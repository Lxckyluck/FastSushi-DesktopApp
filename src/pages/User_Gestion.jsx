/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';

import Navigation from '../components/Navigation';

import styles from '../styles/Header.module.css';
import gestion from '../styles/Gestion.module.css';

import ArrowBack from '../../assets/icons/arrow_back.png';

export default function UserGestion() {
  const navigate = useNavigate();

  const GoBack = () => {
    navigate('/gestion');
  };

  return (
    <div>
      <Navigation />
      <h1 className={styles.title}>User Gestion</h1>
      <div className={styles.PageContent}>
        <img
          src={ArrowBack}
          alt="ArrowBack"
          className={gestion.ArrowBack}
          onClick={GoBack}
        />
        <h2>Create a new user</h2>
      </div>
    </div>
  );
}
