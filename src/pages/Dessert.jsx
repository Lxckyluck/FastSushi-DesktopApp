/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Navigation from '../components/Navigation';
import gestion from '../styles/Gestion.module.css';

import ArrowBack from '../../assets/icons/arrow_back.png';

export default function Dessert() {
  const [CreateDessertModal, setCreateDessertModal] = useState(false);
  const [SeeDessertModal, setSeeDessertModal] = useState(false);
  const [EditDessertModal, setEditDessertModal] = useState(false);
  const [DeleteDessertModal, setDeleteDessertModal] = useState(false);

  const navigate = useNavigate();

  const GoBack = () => {
    navigate('/product');
  };

  const displayCreateDessertModal = () => {
    setCreateDessertModal((prevState) => !prevState);
  };

  const displaySeeDessertModal = () => {
    setSeeDessertModal((prevState) => !prevState);
  };

  const displayEditDessertModal = () => {
    setEditDessertModal((prevState) => !prevState);
  };

  const displayDeleteDessertModal = () => {
    setDeleteDessertModal((prevState) => !prevState);
  };

  return (
    <div>
      <Navigation />
      <h1 className={gestion.title}>Dessert Management</h1>
      <div className={gestion.PageContent}>
        <img
          src={ArrowBack}
          alt="ArrowBack"
          className={gestion.ArrowBack}
          onClick={GoBack}
        />
        <h2 className={gestion.CreateUser} onClick={displayCreateDessertModal}>
          Create a new Dessert
        </h2>
        <h2 className={gestion.SeeUser} onClick={displaySeeDessertModal}>
          Check all Dessert
        </h2>
        <h2 className={gestion.EditUser} onClick={displayEditDessertModal}>
          Edit Dessert
        </h2>
        <h2 className={gestion.DeleteUser} onClick={displayDeleteDessertModal}>
          Delete a Dessert
        </h2>
      </div>
    </div>
  );
}
