import { Archivo } from 'next/font/google'
import Footer from '@/components/layouts/footer/footer';
import Providers from '@/components/providers/providers';
import './globals.css'
import './helper.css'
import { siteMd } from '@/lib/datas/metaDatas';
import Navbar from '@/components/layouts/navbar/navbar';

const archivo = Archivo({ subsets: ['latin'], });

export const metadata = siteMd;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className} suppressHydrationWarning="true" suppressContentEditableWarning="true">
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html >
  )
}
