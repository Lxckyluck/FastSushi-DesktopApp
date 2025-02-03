/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useNavigate } from 'react-router-dom';

import Navigation from '../components/Navigation';
import gestion from '../styles/Gestion.module.css';

import ArrowBack from '../../assets/icons/arrow_back.png';

export default function OrderGestion() {
  const navigate = useNavigate();

  const GoBack = () => {
    navigate('/gestion');
  };
  return (
    <div>
      <Navigation />
      <h1 className={gestion.title}>Order Management</h1>
      <div className={gestion.PageContent}>
        <img
          src={ArrowBack}
          alt="ArrowBack"
          className={gestion.ArrowBack}
          onClick={GoBack}
        />
      </div>
    </div>
  );
}
