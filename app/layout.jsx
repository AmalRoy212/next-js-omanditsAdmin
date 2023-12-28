import { Inter } from 'next/font/google'
import './globals.css'
import { StoreProvider } from './store/StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oman Dits Admin',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StoreProvider>
  )
}
