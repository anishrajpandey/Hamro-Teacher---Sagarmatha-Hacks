import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hamro Teacher',
  description: 'Hamro Teacher Ramro Teacher',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth focus:scroll-auto'>
      <link rel="icon" type="image/png" sizes="32x32" href="logo/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="logo/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <body className={inter.className}>
        
        {children}</body>
    </html>
  )
}
