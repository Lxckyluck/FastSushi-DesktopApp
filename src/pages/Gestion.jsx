/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

import styles from '../styles/Header.module.css';
import gestion from '../styles/Gestion.module.css';

import User from '../../assets/icons/account_circle.png';
import Product from '../../assets/icons/shopping_bag.png';
import Order from '../../assets/icons/sell_24dp.png';

export default function Gestion() {
  const navigate = useNavigate();
  const goUser = () => {
    navigate('/usergestion');
  };

  const goProduct = () => {
    navigate('/productgestion');
  };

  return (
    <div>
      <Navigation />
      <h1 className={styles.title}>Management</h1>
      <div className={styles.PageContent}>
        <h2 className={gestion.SectionManager}>
          User
          <br />
          <img
            src={User}
            alt="User_Image"
            className={gestion.Icon}
            onClick={goUser}
          />
        </h2>
        <h2 className={gestion.SectionManager}>
          Product
          <br />
          <img
            src={Product}
            alt="User_Image"
            className={gestion.Icon}
            onClick={goProduct}
          />
        </h2>
        <h2 className={gestion.SectionManager}>
          Order
          <br />
          <img src={Order} alt="User_Image" className={gestion.Icon} />
        </h2>
      </div>
    </div>
  );
}
