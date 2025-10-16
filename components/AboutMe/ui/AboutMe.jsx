'use client';
import styles from './AboutMe.module.scss';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

export default function AboutMe() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section ref={ref} className={`${styles.aboutInvisible} ${isVisible ? styles.visible : ''}`}>
      <div id="aboutMe" className="aboutMe">
        ОБО МНЕ
      </div>
      <span>
        РОДИЛАСЬ НА ДАЛЬНЕМ ВОСТОКЕ. РИСУЮ И ПРЕПОДАЮ ИЗОБРАЗИТЕЛЬНОЕ ИСКУССТВО В САНКТ-ПЕТЕРБУРГЕ. 12 ЛЕТ ОПЫТА В СТАНКОВОЙ ЖИВОПИСИ, СПЕЦИАЛИЗИРУЮСЬ НА РИСУНКЕ, ЖИВОПИСИ, И ПОДГОТОВКЕ УЧЕНИКОВ К
        ПОСТУПЛЕНИЮ
      </span>
    </section>
  );
}
