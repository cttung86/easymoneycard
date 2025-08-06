import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SupportChat from '../components/SupportChat'
import TelegramButton from '@/components/TelegramButton'

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-black">
      {/* Background matching EMCard exactly */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-900/95"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500/3 via-transparent to-pink-500/3"></div>
      
      <Header />
      <main className="relative z-10">
        <Component {...pageProps} />
      </main>
      <Footer />
      <TelegramButton />
      <SupportChat />
    </div>
  )
}
