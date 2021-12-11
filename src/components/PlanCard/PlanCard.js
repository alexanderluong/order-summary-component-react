import styles from './PlanCard.module.css';
import { ReactComponent as MusicIcon } from '../../assets/svg/icon-music.svg';

const PlanCard = ({ price, planName }) => (
  <div className={styles.card}>
    <MusicIcon
      preserveAspectRatio='none'
      height='42'
      width='42'
      viewBox='0 0 50 50'
    />
    <span class={`flex-column ${styles.plan}`}>
      <span>{planName}</span>
      <span>{price}</span>
    </span>
    <a className={styles.link} href='#'>
      Change
    </a>
  </div>
);

export default PlanCard;
