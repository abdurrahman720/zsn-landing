import { Inter } from 'next/font/google'
import './globals.css'
import Container from './Components/Container'
import Navbar from './Components/Nav/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZSN Tech',
  description: 'Explore the future',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='home-bg'>
          <Container>
            <Navbar/>
          {children}
          </Container>
      
        </div>
        
      </body>
    </html>
  )
}
