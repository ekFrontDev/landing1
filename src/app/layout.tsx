import '../styles/global.scss';
// import nameArtist from '../public/logo.svg';
// import Image from 'next/image';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Таня Табачок</title>
      </head>

      <body className="">
        <header>
          <div>
            <span>HOME</span>
            <span>ОБО МНЕ</span>
            <span>МЕНЮ</span>
          </div>
          <div className="artName">
            {/* <Image src={nameArtist} alt="nameArtits" /> */}
            <svg
              width=""
              height="200"
              viewBox="0 0 300 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="50%"
                y="50%"
                fontFamily="Arial, sans-serif"
                fontSize="105"
                fontWeight="bold"
                fill="#000000ff"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                ТАТЬЯНА ТАБАЧОК
              </text>
            </svg>
          </div>
        </header>
        <main>
          {children}
          <div className="preViewArt">ПРЕВЬЮ РАБОТ</div>
          <section>
            <div>ОБО МНЕ</div>
            <span>
              ХУДОЖНИК И ПРЕПОДАВАТЕЛЬ ИЗОБРАЗИТЕЛЬНОГО ИСКУССТВА, 12 ЛЕТ ОПЫТА
              В СТАНКОВОЙ ЖИВОПИСИ, СПЕЦИАЛИЗИРУЮСЬ НА РИСУНКЕ, ЖИВОПИСИ, И
              ПОДГОТОВКИ УЧЕНИКОВ К ПРОФЕССИОНАЛЬНЫМ УЧЕБНЫМ ЗАВЕДЕНИЯМ С 2012
              ГОДА
            </span>
          </section>
          <div className="preViewArt">ВТОРОЕ ПРЕВЬЮ РАБОТ</div>
          <section>
            <div>РАЗДЕЛ ДЛЯ УЧЕНИКОВ</div>
            <span>
              ХУДОЖНИК И ПРЕПОДАВАТЕЛЬ ИЗОБРАЗИТЕЛЬНОГО ИСКУССТВА, 12 ЛЕТ ОПЫТА
              В СТАНКОВОЙ ЖИВОПИСИ, СПЕЦИАЛИЗИРУЮСЬ НА РИСУНКЕ, ЖИВОПИСИ, И
              ПОДГОТОВКИ УЧЕНИКОВ К ПРОФЕССИОНАЛЬНЫМ УЧЕБНЫМ ЗАВЕДЕНИЯМ С 2012
              ГОДА
            </span>
          </section>
        </main>
        <footer>
          <div>
            <span></span>
          </div>
        </footer>
      </body>
    </html>
  );
}
