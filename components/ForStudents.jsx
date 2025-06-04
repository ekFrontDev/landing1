import styles from '../styles/AboutMe.module.scss';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function ForStudents() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`${styles.aboutInvisible} ${isVisible ? styles.visible : ''}`}
    >
      <div>РАЗДЕЛ ДЛЯ УЧЕНИКОВ</div>
      <span>
        ХУДОЖНИК И ПРЕПОДАВАТЕЛЬ ИЗОБРАЗИТЕЛЬНОГО ИСКУССТВА, 12 ЛЕТ ОПЫТА В
        СТАНКОВОЙ ЖИВОПИСИ, СПЕЦИАЛИЗИРУЮСЬ НА РИСУНКЕ, ЖИВОПИСИ, И ПОДГОТОВКИ
        УЧЕНИКОВ К ПРОФЕССИОНАЛЬНЫМ УЧЕБНЫМ ЗАВЕДЕНИЯМ С 2012 ГОДА
      </span>
    </section>
  );
}
