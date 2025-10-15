import '../app/styles/global.scss';
import '@fontsource/jura/400.css';
import '@fontsource/jura/600.css';
import '@fontsource/jura/700.css';
import Header from '@/widgets/header/ui/Header';
import Footer from '@/widgets/footer/ui/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Татьяна Табачок - Художник',
  description: 'Художник и преподаватель изобразительного искусства',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header img="/assets/icons/menu.svg" hrefBtn="/menu" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
