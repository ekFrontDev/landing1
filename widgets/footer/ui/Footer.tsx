import TgName from '../../../components/TgName/TgName';
import A from '../../../shared/ui/link/A';

export default function Footer() {
  return (
    <footer>
      <div className="footerWrapper">
        <div>
          <A
            href={
              'https://www.instagram.com/chevengur_tania?igsh=ZGhvYm0wOGJ6MWps'
            }
            text={'INSTAGRAM'}
            styleVisible=""
          />
          <A
            href={'https://t.me/chevengur_tania'}
            text={'TELEGRAM'}
            styleVisible=""
          />
          <A
            href={'mailto:tabachok.t.v@mail.ru'}
            text={'EMAIL'}
            styleVisible=""
          />
        </div>
        <TgName />
      </div>
    </footer>
  );
}
