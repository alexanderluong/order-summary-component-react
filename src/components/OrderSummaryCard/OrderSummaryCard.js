import { ReactComponent as HeroImage } from '../../assets/svg/illustration-hero.svg';
import styles from './OrderSummaryCard.module.css';
import Button from '../Button/Button';

const OrderSummaryCard = () => {
  return (
    <div className={styles.card}>
      <div>
        <HeroImage />
      </div>
      <h1 className={styles.h1}>Order Summary</h1>

      <p className={styles.p}>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <p>Annual Plan $59.99/year Change</p>
      <Button>Proceed to Payment</Button>
      <Button>Cancel Order</Button>
    </div>
  );
};

export default OrderSummaryCard;
