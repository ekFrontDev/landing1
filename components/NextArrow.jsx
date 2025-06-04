import styles from '../styles/Slider.module.scss';

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} ${styles.nextArrow}`}
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
        d="M9 18L15 12L9 6"
        stroke="#000000ff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default NextArrow;
