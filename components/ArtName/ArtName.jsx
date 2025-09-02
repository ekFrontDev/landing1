import styles from './ArtName.module.scss';
export default function ArtName() {
  return (
    <div className={styles.artName}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 320 5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          fontFamily="Jura, sans-serif"
          fontSize="34"
          fontWeight="bold"
          fill="#61686b"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          ТАТЬЯНА ТАБАЧОК
        </text>
      </svg>
    </div>
  );
}
