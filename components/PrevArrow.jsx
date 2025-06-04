import styles from '../styles/Slider.module.scss';

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} ${styles.prevArrow}`}
    style={{ ...style }}
    onClick={onClick}
  >
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="#000000ff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default PrevArrow;
