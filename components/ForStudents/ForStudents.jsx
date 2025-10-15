import styles from '../AboutMe/ui/AboutMe.module.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function ForStudents() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`${styles.aboutInvisible} ${isVisible ? styles.visible : ''}`}
    >
      <div>ДЛЯ УЧЕНИКОВ</div>
      <span>
        ПРОВОЖУ ЗАНЯТИЯ СО ВЗРОСЛЫМИ И ДЕТЬМИ. РАБОТАЕМ В РАЗНЫХ ТЕХНИКАХ И С
        РАЗНЫМИ ЗАДАЧАМИ. ОБУЧАЮ С НУЛЯ, ГОТОВЛЮ К ПОСТУПЛЕНИЮ И ПОМОГАЮ
        СПРАВИТЬСЯ С УЧЕБНЫМИ ЗАДАЧАМИ, УДОБНОЕ И ГИБКОЕ РАСПИСАНИЕ.
      </span>
    </section>
  );
}
