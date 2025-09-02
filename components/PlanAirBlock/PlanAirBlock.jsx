import styles from '../AboutMe/AboutMe.module.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function PlanAirBlock() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`${styles.aboutInvisible} ${isVisible ? styles.visible : ''}`}
    >
      <div>ПУТЕШЕСТВИЯ, ПЛЕНЕРЫ, ЗАРИСОВКИ</div>
      <span>
        ОРГАНИЗУЮ ПУТЕШЕСТВИЯ В РАЗНЫЕ ГОРОДА НА ПЛЕНЕРЫ. ПРОВОЖУ МЕРОПРИЯТИЯ В
        МУЗЕЯХ САНТК-ПЕТЕРБУРГА ПО ЗАРИСОВКАМ С НАТУРЫ.
      </span>
    </section>
  );
}
