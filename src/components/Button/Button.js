import styles from './Button.module.css';

const Button = ({ children, variant }) => {
  return (
    <button
      className={`${styles.button} ${
        variant === 'outlined' ? styles.outlined : styles.flat
      }`}
      type='button'
    >
      {children}
    </button>
  );
};

export default Button;
