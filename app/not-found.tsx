import Link from 'next/link';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './styles/pages/notFoundPage/not-found.module.scss';

const NotFoundPage = () => {
  return (
    <div className={classNames(styles.NotFoundPage, {}, [])}>
      <div className={classNames(styles.errorCode)}>404</div>
      <div className={classNames(styles.errorMessage)}>
        ЭХ! Что-то пошло не так...
      </div>
      <div className={classNames(styles.errorMessage)}>
        Запрашиваемой страницы не существует. <br />
        Как ты сюда попал - загадка! <br />
        Но ты можешь кликнуть на кнопку ниже, чтобы вернуться на главную
        страницу.
      </div>
      <Link className={classNames(styles.link)} href="/">
        Домой
      </Link>
    </div>
  );
};

export default NotFoundPage;
