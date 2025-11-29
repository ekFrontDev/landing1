import '../app/styles/index.scss';
import { ThemeProvider } from './providers/ThemeProvider';
import { ClientLayout } from './providers/ThemeProvider';
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
        <ThemeProvider>
          <ClientLayout>
            <Header />
            {children}
            <Footer />
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
