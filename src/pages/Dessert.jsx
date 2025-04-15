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

export default function Dessert() {
  const [CreateDessertModal, setCreateDessertModal] = useState(false);
  const [SeeDessertModal, setSeeDessertModal] = useState(false);
  const [EditDessertModal, setEditDessertModal] = useState(false);
  const [DeleteDessertModal, setDeleteDessertModal] = useState(false);

  const [id, setId] = useState('');
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

  const displayCreateDessertModal = () => {
    setCreateDessertModal((prevState) => !prevState);
  };

  const displaySeeDessertModal = () => {
    setSeeDessertModal((prevState) => !prevState);

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('https://fast-sushi-api.vercel.app/Dessert/read', requestOptions)
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
    setSeeDessertModal((prevState) => !prevState);
    setProduct([]);
  };

  const displayEditDessertModal = () => {
    setEditDessertModal((prevState) => !prevState);
  };

  const displayDeleteDessertModal = () => {
    setDeleteDessertModal((prevState) => !prevState);
  };

  const createDessert = () => {
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

    fetch('https://fast-sushi-api.vercel.app/Dessert/create', requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        if (result) {
          setCreateDessertModal((prevState) => !prevState);
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

  const updateDessert = () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const urlencoded = new URLSearchParams();
    urlencoded.append('name', name);
    urlencoded.append('description', description);
    urlencoded.append('price', price);
    urlencoded.append('type', 'Dessert');
    urlencoded.append('stock', stock);
    urlencoded.append('image_url', imageUrl);

    const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow',
    };

    fetch(
      `https://fast-sushi-api.vercel.app/Dessert/update/${id}`,
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
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
      {CreateDessertModal && (
        <div className={styles.Modal}>
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.btnClose}
            onClick={displayCreateDessertModal}
          />
          <h1>Create a Dessert</h1>
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
            onClick={createDessert}
          >
            Create
          </button>
        </div>
      )}
      {SeeDessertModal && (
        <div className={styles.Modal}>
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.btnClose}
            onClick={ResetSeeModal}
          />
          <h1>All Desserts</h1>
          <br />
          <ul>
            {Product.map((dessert, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>
                id {dessert.id} - <strong>{dessert.name}</strong> -{' '}
                {dessert.price} €
              </li>
            ))}
          </ul>
        </div>
      )}
      {EditDessertModal && (
        <div className={styles.Modal}>
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.btnClose}
            onClick={displayEditDessertModal}
          />
          <h1>Edit an Dessert</h1>
          <p className={styles.credentialsText}>Id :</p>
          <input
            type="number"
            placeholder="id"
            className={styles.CredentialsField}
            onChange={(e) => setId(e.target.value)}
            value={id}
          />
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
            onClick={updateDessert}
          >
            Create
          </button>
        </div>
      )}
    </div>
  );
}
