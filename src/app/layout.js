import { Poppins } from 'next/font/google'
import './globals.css'
import Nav from '@/t/navbar/navbar'

const inter = Poppins({ subsets: ['latin'] ,preload:true,weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"]})

export const metadata = {
  title: 'Convertirar|Your Docsmate',
  description: 'Amazing documents uploader - build by paul lilian',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className+" px-12 py-4"}>
        
         
          {children}
          
      </body>
          
    </html>
  )
}
