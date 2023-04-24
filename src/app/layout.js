import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'

import { Mulish} from 'next/font/google'


const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: `NextFlix | Home`,
  description: 'Best place to find great shows and movies to watch.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
