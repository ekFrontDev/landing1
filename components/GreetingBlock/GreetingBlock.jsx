import styles from './GreetingBlock.module.scss';

export default function GreetingBlock() {
  return (
    <section className={styles.greetingBlockSection}>
      <span className={styles.greetingBlock}>
        ПРИВЕТ! Я <b>ТАТЬЯНА ТАБАЧОК.</b> ХУДОЖНИК ИЗ <b>САНКТ-ПЕТЕРБУРГА.</b>
      </span>
      <span className={styles.greetingBlockContinue}>
        <b className={styles.boldText}>РОДИЛАСЬ</b> НА ДАЛЬНЕМ ВОСТОКЕ.{' '}
        <b className={styles.boldText}>РИСУЮ</b> И ПРЕПОДАЮ ИЗОБРАЗИТЕЛЬНОЕ
        ИСКУССТВО В САНКТ-ПЕТЕРБУРГЕ. <b className={styles.boldText}>12 ЛЕТ</b>{' '}
        ОПЫТА В СТАНКОВОЙ ЖИВОПИСИ, СПЕЦИАЛИЗИРУЮСЬ НА РИСУНКЕ, ЖИВОПИСИ, И
        ПОДГОТОВКЕ УЧЕНИКОВ К ПОСТУПЛЕНИЮ.{' '}
        <b className={styles.boldText}>ЗАНИМАЮСЬ</b> АЛЬПИНИЗМОМ, БЫЛА НА
        ВЕРШИНАХ ИНГУШЕТИИ, ДАГЕСТАНА, КАВКАЗА, КИРГИЗИИ И ХИБИН.
      </span>
    </section>
  );
}
