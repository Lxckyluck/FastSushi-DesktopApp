/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Navigation from '../components/Navigation';
import gestion from '../styles/Gestion.module.css';

import ArrowBack from '../../assets/icons/arrow_back.png';

export default function Plate() {
  const [CreatePlateModal, setCreatePlateModal] = useState(false);
  const [SeePlateModal, setSeePlateModal] = useState(false);
  const [EditPlateModal, setEditPlateModal] = useState(false);
  const [DeletePlateModal, setDeletePlateModal] = useState(false);

  const navigate = useNavigate();

  const GoBack = () => {
    navigate('/product');
  };

  const displayCreatePlateModal = () => {
    setCreatePlateModal((prevState) => !prevState);
  };

  const displaySeePlateModal = () => {
    setSeePlateModal((prevState) => !prevState);
  };

  const displayEditPlateModal = () => {
    setEditPlateModal((prevState) => !prevState);
  };

  const displayDeletePlateModal = () => {
    setDeletePlateModal((prevState) => !prevState);
  };

  return (
    <div>
      <Navigation />
      <h1 className={gestion.title}>Plate Management</h1>
      <div className={gestion.PageContent}>
        <img
          src={ArrowBack}
          alt="ArrowBack"
          className={gestion.ArrowBack}
          onClick={GoBack}
        />
        <h2 className={gestion.CreateUser} onClick={displayCreatePlateModal}>
          Create a new Plate
        </h2>
        <h2 className={gestion.SeeUser} onClick={displaySeePlateModal}>
          Check all Plate
        </h2>
        <h2 className={gestion.EditUser} onClick={displayEditPlateModal}>
          Edit Plate
        </h2>
        <h2 className={gestion.DeleteUser} onClick={displayDeletePlateModal}>
          Delete a Plate
        </h2>
      </div>
    </div>
  );
}
