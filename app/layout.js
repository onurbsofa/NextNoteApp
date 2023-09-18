import NavBar from './components/NavBar'
import './globals.css'
import Link from 'next/link'
//array de objetos donde se ponen los links


export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Next Note App</title>
      </head>
      <body>
        <header>
          <NavBar/>
        </header>
          {children}
      </body>
    </html>
  )
}
