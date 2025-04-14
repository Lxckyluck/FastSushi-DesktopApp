/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';

import Navigation from '../components/Navigation';
import styles from '../styles/Header.module.css';
import gestion from '../styles/Gestion.module.css';

import Appetizer from '../../assets/icons/appetizer.png';
import Plate from '../../assets/icons/plate.png';
import dessert from '../../assets/icons/dessert.png';

export default function Settings() {
  const navigate = useNavigate();

  const goAppetizer = () => {
    navigate('/appetizer');
  };

  const goPlate = () => {
    navigate('/plate');
  };

  const goDessert = () => {
    navigate('/plate');
  };

  return (
    <div>
      <Navigation />
      <h1 className={styles.title}>Product Page</h1>
      <div className={styles.PageContent}>
        <h2 className={gestion.SectionManager}>
          Appetizer
          <br />
          <img
            src={Appetizer}
            alt="Appetizer_image"
            className={gestion.Icon}
            onClick={goAppetizer}
          />
        </h2>
        <h2 className={gestion.SectionManager}>
          Plate
          <br />
          <img
            src={Plate}
            alt="Plate_image"
            className={gestion.Icon}
            onClick={goPlate}
          />
        </h2>
        <h2 className={gestion.SectionManager}>
          Dessert
          <br />
          <img
            src={dessert}
            alt="Dessert_image"
            className={gestion.Icon}
            onClick={goDessert}
          />
        </h2>
      </div>
    </div>
  );
}
