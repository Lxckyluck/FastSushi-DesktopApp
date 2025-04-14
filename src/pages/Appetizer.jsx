/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../components/Navigation';

import gestion from '../styles/Gestion.module.css';
import styles from '../styles/Modal.module.css';

import ArrowBack from '../../assets/icons/arrow_back.png';

export default function Appetizer() {
  const [CreateAppetizerModal, setCreateAppetizerModal] = useState(false);
  const [SeeAppetizerModal, setSeeAppetizerModal] = useState(false);
  const [EditAppetizerModal, setEditAppetizerModal] = useState(false);
  const [DeleteAppetizerModal, setDeleteAppetizerModal] = useState(false);

  const [Product, setProduct] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const GoBack = () => {
    navigate('/product');
  };

  const token = localStorage.getItem('authToken');

  const displayCreateAppetizerModal = () => {
    setCreateAppetizerModal((prevState) => !prevState);
  };

  const displaySeeAppetizerModal = () => {
    setSeeAppetizerModal((prevState) => !prevState);

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('https://fast-sushi-api.vercel.app/appetizer/read', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProduct(data);
          return data;
        }
        throw new Error('Response does not contain an array');
      })
      .catch((error) => console.log('error', error));
  };

  const ResetSeeModal = () => {
    setSeeAppetizerModal((prevState) => !prevState);
    setProduct([]);
  };

  const displayEditAppetizerModal = () => {
    setEditAppetizerModal((prevState) => !prevState);
  };

  const displayDeleteAppetizerModal = () => {
    setDeleteAppetizerModal((prevState) => !prevState);
  };

  const createAppetizer = () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    myHeaders.append('token', token);

    const urlencoded = new URLSearchParams();
    urlencoded.append('name', name);
    urlencoded.append('description', description);
    urlencoded.append('price', price);
    urlencoded.append('stock', stock);
    urlencoded.append('image_url', imageUrl);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow',
    };

    fetch('https://fast-sushi-api.vercel.app/appetizer/create', requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        if (result) {
          setCreateAppetizerModal((prevState) => !prevState);
          setName('');
          setDescription('');
          setPrice('');
          setStock('');
          setImageUrl('');
          return result;
        }
        throw new Error('Failed to create user');
      })
      .catch((error) => console.log('error', error));
  };
  return (
    <div>
      <Navigation />
      <h1 className={gestion.title}>Appetizer Management</h1>
      <div className={gestion.PageContent}>
        <img
          src={ArrowBack}
          alt="ArrowBack"
          className={gestion.ArrowBack}
          onClick={GoBack}
        />
        <h2
          className={gestion.CreateUser}
          onClick={displayCreateAppetizerModal}
        >
          Create a new Appetizer
        </h2>
        <h2 className={gestion.SeeUser} onClick={displaySeeAppetizerModal}>
          Check all Appetizer
        </h2>
        <h2 className={gestion.EditUser} onClick={displayEditAppetizerModal}>
          Edit Appetizer
        </h2>
        <h2
          className={gestion.DeleteUser}
          onClick={displayDeleteAppetizerModal}
        >
          Delete an Appetizer
        </h2>
      </div>
      {CreateAppetizerModal && (
        <div className={styles.Modal}>
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.btnClose}
            onClick={displayCreateAppetizerModal}
          />
          <h1>Create an Appetizer</h1>
          <p className={styles.credentialsText}>Name :</p>
          <input
            type="text"
            placeholder="name"
            className={styles.CredentialsField}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <p className={styles.credentialsText}>Description :</p>
          <input
            type="text"
            placeholder="description"
            className={styles.CredentialsField}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <p className={styles.credentialsText}>price</p>
          <input
            type="number"
            placeholder="price"
            className={styles.CredentialsField}
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <p className={styles.credentialsText}>stock</p>
          <input
            type="number"
            placeholder="stock"
            className={styles.CredentialsField}
            onChange={(e) => setStock(e.target.value)}
            value={stock}
          />
          <p className={styles.credentialsText}>image url</p>
          <input
            type="text"
            placeholder="image url"
            className={styles.CredentialsField}
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
          />
          <button
            className={styles.ValidButton}
            type="button"
            onClick={createAppetizer}
          >
            Create
          </button>
        </div>
      )}
      {SeeAppetizerModal && (
        <div className={styles.Modal}>
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.btnClose}
            onClick={ResetSeeModal}
          />
          <h1>All Appetizers</h1>
          <br />
          <ul>
            {Product.map((appetizer, index) => (
              <li key={index}>
                <strong>{appetizer.name}</strong> - {appetizer.price} €
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
