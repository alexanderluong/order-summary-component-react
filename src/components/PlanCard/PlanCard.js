import { ReactComponent as MusicIcon } from '../../assets/svg/icon-music.svg';
import styles from './PlanCard.module.css';

const PlanCard = ({ price, planName }) => (
  <div className={styles.card}>
    <MusicIcon
      preserveAspectRatio='none'
      height='46'
      width='46'
      viewBox='0 0 50 50'
    />
    <span class={`flex-column ${styles.plan}`}>
      <p>
        <b>{planName}</b>
      </p>
      <p>{price}</p>
    </span>
    <a className={styles.link} href='#'>
      Change
    </a>
  </div>
);

export default PlanCard;
