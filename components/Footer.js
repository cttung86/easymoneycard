import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-transparent border-t border-white/10 mt-24 pt-16 pb-10 text-gray-400 text-sm relative">
      {/* Border highlight (optional) */}
      <div className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 opacity-20" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-6">
        {/* Left Side */}
        <div className="flex flex-col gap-6">
          <div className="font-semibold text-white text-lg sm:text-xl">EasyMoneyCard</div>
          <div className="flex gap-2 flex-wrap">
            <span className="inline-block px-4 py-1 rounded-full bg-black/40 text-white/80 text-xs border border-white/10 font-medium">
              EasyMoneyCard
            </span>
            <span className="inline-block px-4 py-1 rounded-full bg-black/40 text-white/80 text-xs border border-white/10 font-medium">
              $EMC
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-start md:items-end justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight text-left md:text-right">
            Get your EasyMoneyCard<br />now
          </h2>
          <p className="text-gray-400 mb-5 max-w-sm text-left md:text-right">
            Instantly create and top-up your EasyMoneyCard with multiple Crypto Currencies and enjoy hassle-free shopping in real life and online.
          </p>
          <Link
            href="/signup"
            className="inline-block px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white font-semibold shadow-md hover:bg-white/20 transition-all duration-300 text-sm sm:text-base backdrop-blur mb-4"
          >
            Get your EasyMoneyCard
          </Link>
          <div className="flex flex-wrap gap-4 mt-2 text-white text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l4 4 6-8" />
              </svg>
              <span>Works IRL</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l4 4 6-8" />
              </svg>
              <span>Refund anytime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <div className="text-center md:text-left">&copy; 2025 EasyMoneyCard — All rights reserved.</div>
        <div className="flex gap-6 text-center md:text-right">
          <Link href="/terms" className="hover:underline">Terms of Use</Link>
          <Link href="https://t.me/Easy_MoneyCard" target="_blank" className="hover:underline">Telegram</Link>
        </div>
      </div>
    </footer>
  );
}
