import '../app/styles/index.scss';
import { ThemeProvider, useTheme } from './providers/ThemeProvider';
import Header from '@/widgets/header/ui/Header';
import Footer from '@/widgets/footer/ui/Footer';
import type { Metadata } from 'next';
import { classNames } from '@/shared/lib/classNames/classNames';

export const metadata: Metadata = {
  title: 'Татьяна Табачок - Художник',
  description: 'Художник и преподаватель изобразительного искусства',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <html lang="ru" className={classNames('app', {}, [theme])}>
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
