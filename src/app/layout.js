import { Poppins } from 'next/font/google'
import './globals.css'

const inter = Poppins({ subsets: ['latin'] ,preload:true,weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"]})

export const metadata = {
  title: 'Docs Mate',
  description: 'Amazing documents uploader - build by paul lilian',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
