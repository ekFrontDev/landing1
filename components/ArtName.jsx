import styles from '../styles/ArtName.module.scss';
export default function ArtName() {
  return (
    <div className={styles.artName}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 300 25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          fontFamily="Arial, sans-serif"
          fontSize="31"
          fontWeight="bold"
          fill="#000000ff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          ТАТЬЯНА ТАБАЧОК
        </text>
      </svg>
    </div>
  );
}
