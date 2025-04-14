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

export default function ProductGestion() {
  const [CreateProductModal, setCreateProductModal] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [stock, setStock] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const GoBack = () => {
    navigate('/gestion');
  };

  const token = localStorage.getItem('authToken');

  const displayProductModal = () => {
    setCreateProductModal((prevState) => !prevState);
  };

  const createProduct = () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    myHeaders.append('token', token);

    const urlencoded = new URLSearchParams();
    const key = urlencoded;

    key.append('name', name);
    key.append('description', description);
    key.append('price', price);
    key.append('type', type);
    key.append('stock', stock);
    key.append('image_url', imageUrl);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: key,
      redirect: 'follow',
    };

    fetch(
      'https://fast-sushi-api.vercel.app/product/createProduct',
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status === 201) {
          alert('Your Product has been successfully created');
        }
        if (result && result.status !== 500) {
          setCreateProductModal((prevState) => !prevState);
          setName('');
          setDescription('');
          setPrice('');
          setType('');
          setStock('');
          setImageUrl('');
          alert('Your Product has been successfully created');
          return result;
        }
        throw new Error('Failed to create user');
      })
      .catch((error) => console.log('error', error));
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
        <h2 className={gestion.CreateUser} onClick={displayProductModal}>
          Create a new product
        </h2>
        <h2 className={gestion.SeeUser}>Check all product</h2>
        <h2 className={gestion.EditUser}>Edit a product</h2>
        <h2 className={gestion.DeleteUser}>Delete a product</h2>
      </div>
      {CreateProductModal && (
        <div className={styles.Modal}>
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.btnClose}
            onClick={displayProductModal}
          />
          <h1>Create a product</h1>
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
          <p className={styles.credentialsText}>Price :</p>
          <input
            type="number"
            placeholder="price"
            className={styles.CredentialsField}
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <p className={styles.credentialsText}>Type :</p>
          <input
            type="text"
            placeholder="type"
            className={styles.CredentialsField}
            onChange={(e) => setType(e.target.value)}
            value={type}
          />
          <p className={styles.credentialsText}>Stock :</p>
          <input
            type="number"
            placeholder="stock"
            className={styles.CredentialsField}
            onChange={(e) => setStock(e.target.value)}
            value={stock}
          />
          <p className={styles.credentialsText}>Image</p>
          <input
            type="text"
            placeholder="imageurl"
            className={styles.CredentialsField}
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
          />
          <button
            className={styles.ValidButton}
            type="button"
            onClick={createProduct}
          >
            Create
          </button>
        </div>
      )}
    </div>
  );
}
