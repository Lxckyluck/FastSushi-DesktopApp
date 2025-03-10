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

export default function UserGestion() {
  const [CreateUserModal, setCreateUserModal] = useState(false);
  const [SeeUserModal, setSeeUserModal] = useState(false);
  const [EditUserModal, setEditUserModal] = useState(false);
  const [DeleteUserModal, setDeleteUserModal] = useState(false);

  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userid, setuserid] = useState(null);
  const navigate = useNavigate();

  const GoBack = () => {
    navigate('/gestion');
  };

  const token = localStorage.getItem('authToken');

  const displayCreateUserModal = () => {
    setCreateUserModal((prevState) => !prevState);
  };

  const displaySeeUserModal = () => {
    setSeeUserModal((prevState) => !prevState);

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('http://localhost:3000/users/read', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.log('La réponse ne contient pas un tableau', data);
        }
      })
      .catch((error) => console.log('error', error));
  };

  const ResetSeeModal = () => {
    setSeeUserModal((prevState) => !prevState);
    setUsers([]);
  };

  const displayEditUserModal = () => {
    setEditUserModal((prevState) => !prevState);
  };

  const displayDeleteUserModal = () => {
    setDeleteUserModal((prevState) => !prevState);
  };

  const createUser = () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    myHeaders.append('token', token);

    const urlencoded = new URLSearchParams();
    urlencoded.append('name', name);
    urlencoded.append('email', email);
    urlencoded.append('password', password);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow',
    };

    fetch('http://localhost:3000/users/signup', requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        if (result) {
          setCreateUserModal((prevState) => !prevState);
          setName('');
          setEmail('');
          setPassword('');
          return result;
        }
        throw new Error('Failed to create user');
      })
      .catch((error) => console.log('error', error));
  };

  return (
    <div>
      <Navigation />
      <h1 className={gestion.title}>User Management</h1>
      <div className={gestion.PageContent}>
        <img
          src={ArrowBack}
          alt="ArrowBack"
          className={gestion.ArrowBack}
          onClick={GoBack}
        />
        <h2 className={gestion.CreateUser} onClick={displayCreateUserModal}>
          Create a new admin user
        </h2>
        <h2 className={gestion.SeeUser} onClick={displaySeeUserModal}>
          Check all user
        </h2>
        <h2 className={gestion.EditUser} onClick={displayEditUserModal}>
          Edit user
        </h2>
        <h2 className={gestion.DeleteUser} onClick={displayDeleteUserModal}>
          Delete an user
        </h2>
      </div>
      {CreateUserModal && (
        <div className={styles.Modal}>
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.btnClose}
            onClick={displayCreateUserModal}
          />
          <h1>Create an user</h1>
          <p className={styles.credentialsText}>Name :</p>
          <input
            type="text"
            placeholder="name"
            className={styles.CredentialsField}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <p className={styles.credentialsText}>Email :</p>
          <input
            type="text"
            placeholder="email"
            className={styles.CredentialsField}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <p className={styles.credentialsText}>Password :</p>
          <input
            type="password"
            placeholder="password"
            className={styles.CredentialsField}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            className={styles.ValidButton}
            type="button"
            onClick={createUser}
          >
            Create
          </button>
        </div>
      )}
      {SeeUserModal && (
        <div className={styles.Modal}>
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.btnClose}
            onClick={ResetSeeModal}
          />
          <h1>All Users</h1>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                <strong>{user.name}</strong> - {user.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
