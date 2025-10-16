import '../app/styles/index.scss';
import Header from '@/widgets/header/ui/Header';
import Footer from '@/widgets/footer/ui/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Татьяна Табачок - Художник',
  description: 'Художник и преподаватель изобразительного искусства',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="app">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
