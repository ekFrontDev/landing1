import styles from '../styles/AboutMe.module.scss';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function PlanAirBlock() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`${styles.aboutInvisible} ${isVisible ? styles.visible : ''}`}
    >
      <div>ПУТЕШЕСТВИЯ НА ПЛЕНЕР</div>
      <span>ОРГАНИЗУЮ ПУТЕШЕСТВИЯ В РАЗНЫЕ ГОРОДА НА ПЛЕНЕРЫ</span>
    </section>
  );
}
