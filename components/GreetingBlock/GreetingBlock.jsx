"use client"
import styles from './GreetingBlock.module.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function GreetingBlock() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section
      ref={ref}
      className={`${styles.greetingBlockSection} ${styles.aboutInvisible} ${isVisible ? styles.visible : ''}`}
    >
      <span className={styles.greetingBlock}>
        ПРИВЕТ! Я <b>ТАТЬЯНА ТАБАЧОК.</b> ХУДОЖНИК ИЗ <b>САНКТ-ПЕТЕРБУРГА.</b>
      </span>
      <span className={styles.greetingBlockContinue}>
        <b className={styles.boldText}>РОДИЛАСЬ</b> НА ДАЛЬНЕМ ВОСТОКЕ. <br />
        <b className={styles.boldText}>РИСУЮ</b> И ПРЕПОДАЮ ИЗОБРАЗИТЕЛЬНОЕ
        ИСКУССТВО В САНКТ-ПЕТЕРБУРГЕ. <br />
        <b className={styles.boldText}>12 ЛЕТ</b> ОПЫТА В СТАНКОВОЙ ЖИВОПИСИ,
        СПЕЦИАЛИЗИРУЮСЬ НА РИСУНКЕ, ЖИВОПИСИ, И ПОДГОТОВКЕ УЧЕНИКОВ К
        ПОСТУПЛЕНИЮ. <br />
        <b className={styles.boldText}>ЗАНИМАЮСЬ</b> АЛЬПИНИЗМОМ, БЫЛА НА
        ВЕРШИНАХ ИНГУШЕТИИ, ДАГЕСТАНА, КАВКАЗА, КИРГИЗИИ И ХИБИН.
      </span>
    </section>
  );
}
