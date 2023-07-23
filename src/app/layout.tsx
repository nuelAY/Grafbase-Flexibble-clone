import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import '../globals.css'

export const metadata = {
  title: 'Flexxible Next.js clone project',
  description: 'Showcase and discover remarkable developer project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  )
}
