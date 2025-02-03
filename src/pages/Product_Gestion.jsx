/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useNavigate } from 'react-router-dom';

import Navigation from '../components/Navigation';
import gestion from '../styles/Gestion.module.css';

import ArrowBack from '../../assets/icons/arrow_back.png';

export default function ProductGestion() {
  const navigate = useNavigate();

  const GoBack = () => {
    navigate('/gestion');
  };
  return (
    <div>
      <Navigation />
      <h1 className={gestion.title}>Product Management</h1>
      <div className={gestion.PageContent}>
        <img
          src={ArrowBack}
          alt="ArrowBack"
          className={gestion.ArrowBack}
          onClick={GoBack}
        />
        <h2 className={gestion.CreateUser}>Create a new product</h2>
        <h2 className={gestion.SeeUser}>Check all product</h2>
        <h2 className={gestion.EditUser}>Edit a product</h2>
        <h2 className={gestion.DeleteUser}>Delete a product</h2>
      </div>
    </div>
  );
}
