
import './globals.css'
import Link from 'next/link'
//array de objetos donde se ponen los links


export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Next Note App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/next-note-app/public/favicon.ico" />
      </head>
      <body>
        <main>
          <header>
            <nav>
              <Link href="/">
                Home
              </Link>
              <Link href="/notes">
                Notes
              </Link>
            </nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  )
}
