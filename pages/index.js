import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const merchantsTop = [
  { name: 'Klarna', icon: <span className="font-bold text-lg">K.</span> },
  { name: 'Amazon', icon: <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24"><text x="2" y="18" fontSize="16" fill="white">a</text></svg> },
  { name: 'Apple', icon: <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24"><text x="2" y="18" fontSize="16" fill="white"></text></svg> },
  { name: 'Slack', icon: <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="white" /></svg> },
  { name: 'Discord', icon: <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="white" /></svg> },
  { name: 'Android', icon: <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="8" rx="2" fill="white" /></svg> },
];
const merchantsBottom = [
  { name: 'Behance', icon: <span className="font-bold text-lg">Be</span> },
  { name: 'Shopify', icon: <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="8" rx="2" fill="white" /></svg> },
  { name: 'Xing', icon: <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6l-6 6" stroke="white" strokeWidth="2"/></svg> },
  { name: 'Twitch', icon: <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="white" /></svg> },
  { name: 'Klarna', icon: <span className="font-bold text-lg">K.</span> },
  { name: 'Amazon', icon: <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24"><text x="2" y="18" fontSize="16" fill="white">a</text></svg> },
];

const faqData = [
  {
    question: "What are the EasyMoneyCard fees?",
    answer: (
      <>
        There are only two fees for using EasyMoneyCard:
        <ul className="text-gray-300 mt-2 space-y-1">
          <li>• Top-up fee - 1%</li>
          <li>• Card issuance fee - 50$</li>
        </ul>
      </>
    ),
  },
  {
    question: "What is the minimum top-up for the card?",
    answer: "The minimum top-up varies depending on the card type you've chosen.",
  },
  {
    question: "Does EasyMoneyCard work IRL?",
    answer: "Yes! The Visa EasyMoneyCard can be used IRL through Apple Pay and Google Pay!",
  },
  {
    question: "How secure is EasyMoneyCard?",
    answer: "EasyMoneyCard doesn't collect any user info. If you're worried about the legitimacy of the product, we encourage you to contact members of our Telegram for previous experience reports or EasyMoneyCard employees for more information.",
  },
  {
    question: "Are there limits to the EasyMoneyCard?",
    answer: "We have absolutely no limits using your EasyMoneyCard & there is absolutely zero KYC required.",
  },
  {
    question: "Why is my EasyMoneyCard not working on this merchant?",
    answer: "If you have any issues with payments 'not working' on a particular merchant, please feel free to reach out, so that we can verify the issue & confirm whether it's an 'us' problem, or a 'merchant' problem.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(Array(faqData.length).fill(false));

  const toggleFaq = idx => {
    setOpenFaq(openFaq =>
      openFaq.map((open, i) => (i === idx ? !open : open))
    );
  };

  return (
    <div className="min-h-screen bg-transparent text-white relative font-[Inter,sans-serif]">
      <div
        className="absolute top-0 left-[10%] h-px w-[5%] md:left-[10%] md:w-[5%] lg:left-[20%] lg:w-[5%] z-10"
        style={{
          background: 'linear-gradient(90deg, #a855f7 0%, #fbbf24 100%)',
          boxShadow: '0 0 12px 2px #fbbf24',
        }}
      />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
       
        {/* Main Hero Section */}
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Feature Tag */}
          <div className="mb-8 pt-8">
            <div className="inline-flex items-center bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2">
              <svg
                className="w-4 h-4 text-white mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white text-sm font-medium">
                Works IRL with Apple Pay
              </span>
            </div>
          </div>

          <div className="text-left max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
              The card for all your Web3 needs.
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-300 drop-shadow-lg">
              The EasyMoney Card
            </h2>

            <p className="text-base sm:text-lg md:text-xl mb-12 text-gray-300 max-w-2xl drop-shadow-lg leading-relaxed">
              Instantly create and top-up your EasyMoneyCard with multiple Crypto Currencies and enjoy hassle-free shopping in real life and online.
            </p>

            <Link
              href="/signup"
              className="inline-block 
                        px-4 sm:px-6 lg:px-8 
                        py-2 sm:py-3 lg:py-4 
                        bg-gradient-to-r from-purple-600/90 to-blue-600/90 
                        text-white font-semibold 
                        text-sm sm:text-base lg:text-lg 
                        rounded-lg 
                        hover:from-purple-700 hover:to-blue-700 
                        transition-all duration-300 
                        shadow-lg shadow-purple-500/20 hover:shadow-purple-400/30"
            >
              <span className="block sm:hidden">Get your EMC</span>
              <span className="hidden sm:block">Get your EasyMoneyCard</span>
            </Link>
          </div>
        </motion.div>

         {/* Divider Line */}
        <div className="max-auto mx-auto mb-20 relative">
          <div
            className="absolute top-0 left-[10%] h-px w-[10%] md:left-[10%] md:w-[10%] lg:left-[20%] lg:w-[5%] z-10"
            style={{
              background: 'linear-gradient(90deg, #a855f7 0%, #fbbf24 100%)',
              boxShadow: '0 0 12px 3px #fbbf24',
            }}
          />
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
        {/* Need to make a purchase section */}
        <div className="max-w-7xl mx-auto text-center mb-20">
          <motion.div
            className="max-w-7xl mx-auto mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Need to make a purchase right<br />
              now but want to use your cryptocurrency?<br />
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-lg">
              EasyMoneyCard facilitates your shopping experience at all retailers with 100% payment approval rates.
            </p>
          </motion.div>
        </div>
        {/* Features Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Feature 1 */}
            <motion.div
              className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-xl p-6 sm:p-8 hover:border-white/30 transition-all duration-300 shadow-2xl shadow-black/20 hover:shadow-white/10 relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400"></div>
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 mr-4 flex-shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 32 32" fill="none">
                    <path d="M4 16C4 16 8 8 16 8C24 8 28 16 28 16C28 16 24 24 16 24C8 24 4 16 4 16Z" stroke="url(#gradient1)" strokeWidth="2" fill="none"/>
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#A855F7"/>
                        <stop offset="100%" stopColor="#EC4899"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white drop-shadow-sm">No Annual Fees</h3>
              </div>
              <p className="text-gray-300 drop-shadow-sm text-base sm:text-lg">
                Unlike most cards, EasyMoneyCard doesn't have any annual fees nor hidden charges.
              </p>
            </motion.div>
            {/* Feature 2 */}
            <motion.div
              className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-xl p-6 sm:p-8 hover:border-white/30 transition-all duration-300 shadow-2xl shadow-black/20 hover:shadow-white/10 relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400"></div>
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 mr-4 flex-shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 32 32" fill="none">
                    <rect x="4" y="8" width="24" height="16" rx="2" stroke="url(#gradient2)" strokeWidth="2" fill="none"/>
                    <rect x="8" y="12" width="8" height="4" rx="1" fill="url(#gradient2)"/>
                    <defs>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#A855F7"/>
                        <stop offset="100%" stopColor="#EC4899"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white drop-shadow-sm">Apple Pay Compatible</h3>
              </div>
              <p className="text-gray-300 drop-shadow-sm text-base sm:text-lg">
                Use your EasyMoneyCard IRL with Apple Pay and Google Pay anywhere.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Bottom Feature List - Marquee Effect */}
        <div className="max-w-7xl mx-auto mb-20 overflow-hidden">
          <div className="flex items-center space-x-6 sm:space-x-8 animate-marquee-left whitespace-nowrap">
            {[
              "Apple Pay Compatible",
              "Works IRL", 
              "No Hidden Fees",
              "Refund Anytime",
              "Issued Within 10 Minutes",
              "EasyMoney Ecosystem"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-medium text-sm sm:text-base">{feature}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              "Apple Pay Compatible",
              "Works IRL", 
              "No Hidden Fees",
              "Refund Anytime",
              "Issued Within 10 Minutes",
              "EasyMoney Ecosystem"
            ].map((feature, index) => (
              <div key={`duplicate-${index}`} className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-medium text-sm sm:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
          {/* Divider Line */}
        <div className="max-auto mx-auto mb-20 relative">
          <div
            className="absolute top-0 left-[10%] h-px w-[10%] md:left-[10%] md:w-[10%] lg:left-[20%] lg:w-[5%] z-10"
            style={{
              background: 'linear-gradient(90deg, #a855f7 0%, #fbbf24 100%)',
              boxShadow: '0 0 12px 3px #fbbf24',
            }}
          />
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
        {/* Use IRL with Apple Pay Section */}
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="rounded-3xl bg-gradient-to-b from-[#2d223a]/60 via-[#18141e]/80 to-[#18141e]/90 border border-white/10 shadow-2xl flex flex-col md:flex-row overflow-hidden">
            {/* Left: Text + Features */}
            <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center">
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                Use IRL with Apple Pay
              </h4>
              <p className="text-gray-400 mb-8 text-base sm:text-lg">
                Worldwide compatibility through Apple Pay and Google Pay
              </p>

              <div className="space-y-6 mb-10">
                {/* Feature 1 */}
                <div className="flex items-start sm:items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/40 flex items-center justify-center mr-4 border border-white/10 shadow-inner shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="4" width="16" height="16" rx="4" stroke="url(#cmdg)" strokeWidth="2" />
                      <path d="M8 8h8v8H8V8z" stroke="url(#cmdg)" strokeWidth="2" />
                      <defs>
                        <linearGradient id="cmdg" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#A855F7" />
                          <stop offset="1" stopColor="#EC4899" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-base sm:text-lg">Top-up seamlessly</div>
                    <div className="text-gray-400 text-xs sm:text-sm">
                      With 1% fees only, topping up your EasyMoneyCard is easy.
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start sm:items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/40 flex items-center justify-center mr-4 border border-white/10 shadow-inner shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="4" width="16" height="16" rx="4" stroke="url(#refg)" strokeWidth="2" />
                      <path d="M8 12h8M12 8v8" stroke="url(#refg)" strokeWidth="2" />
                      <defs>
                        <linearGradient id="refg" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#A855F7" />
                          <stop offset="1" stopColor="#EC4899" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-base sm:text-lg">Regret topping up?</div>
                    <div className="text-gray-400 text-xs sm:text-sm">
                      Request a refund through the dashboard.
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button - Responsive */}
              <Link
                href="/signup"
                className="inline-block 
                  px-4 sm:px-6 lg:px-8 
                  py-2 sm:py-3 lg:py-4 
                  bg-white/10 border border-white/20 
                  rounded-full text-white font-semibold 
                  text-sm sm:text-base lg:text-lg 
                  shadow-lg backdrop-blur 
                  hover:bg-white/20 transition-all duration-300"
              >
                <span className="block sm:hidden">Get your EMC</span>
                <span className="hidden sm:block">Get your EasyMoneyCard</span>
              </Link>
            </div>

            {/* Right: Card/Phone Mockup */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-10 md:p-14 lg:p-16">
              <div className="w-40 h-64 sm:w-60 sm:h-80 lg:w-72 lg:h-96 bg-black/60 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                {/* Inner card mockup */}
                <div className="w-36 h-20 sm:w-52 sm:h-32 bg-gradient-to-br from-gray-800 via-black to-gray-900 rounded-xl border border-white/10 flex flex-col justify-between p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-semibold text-sm sm:text-base">EasyMoney</span>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M18 8a6 6 0 01-12 0" />
                    </svg>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-white/60 tracking-widest text-xs">**** 1234</span>
                    <span className="text-white/80 font-bold text-sm sm:text-base">VISA</span>
                  </div>
                </div>

                {/* Blue checkmark */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="#3B82F6" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeOpacity="0.5" />
                    <path d="M8 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Integrations Section */}
        <div className="max-w-7xl mx-auto mb-32 relative flex flex-col items-center justify-center" style={{minHeight: '420px'}}>
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 z-10">
            <span className="inline-block bg-black/40 px-4 py-1 rounded-full text-xs text-white/80 border border-white/10 shadow backdrop-blur">
              EMCard Integrations
            </span>
          </div>
          <motion.div
            className="max-w-7xl mx-auto mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl sm:text-3xl font-bold text-white mb-8 text-center drop-shadow-lg z-10">Merchants supported from all over the world.</h3>
          </motion.div>
          {/* Bubble */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-b from-white/5 via-black/60 to-black/80 border border-white/10 shadow-2xl z-10" style={{
                boxShadow: '0 0 120px 40px rgba(168,85,247,0.10), 0 0 0 12px rgba(255,255,255,0.03) inset'
              }}></div>
              <div className="w-40 h-40 sm:w-72 sm:h-72 rounded-full bg-gradient-to-b from-white/10 via-black/80 to-black/90 flex items-center justify-center shadow-3xl border border-white/10 relative z-20" style={{
                boxShadow: '0 0 80px 20px rgba(255,255,255,0.12), 0 16px 64px 0 rgba(168,85,247,0.18) inset, 0 0 0 8px rgba(255,255,255,0.04) inset'
              }}>
                <div className="absolute inset-0 rounded-full bg-black/60 blur-2xl"></div>
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <span className="text-2xl sm:text-5xl font-bold text-white drop-shadow-2xl mb-2" style={{textShadow: '0 2px 24px #fff8'}}>150M+</span>
                  <span className="text-white/80 text-base sm:text-lg">supported merchants</span>
                </div>
              </div>
            </div>
          </div>
          {/* Merchant Cards - Marquee Rows */}
          <div className="w-full flex flex-col items-center justify-center z-0 mt-8">
            <div className="w-full overflow-hidden mb-6">
              <div className="marquee-row flex items-center space-x-4 sm:space-x-8 whitespace-nowrap animate-marquee-left">
                {[...merchantsTop, ...merchantsTop].map((merchant, index) => (
                  <div key={index} className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl px-4 py-4 sm:px-8 sm:py-6 flex flex-col items-center justify-center shadow-lg" style={{minWidth: '90px', minHeight: '70px'}}>
                    <div className="mb-2">{merchant.icon}</div>
                    <div className="text-white/90 font-medium text-xs sm:text-sm">{merchant.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full overflow-hidden">
              <div className="marquee-row flex items-center space-x-4 sm:space-x-8 whitespace-nowrap animate-marquee-right">
                {[...merchantsBottom, ...merchantsBottom].map((merchant, index) => (
                  <div key={index} className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl px-4 py-4 sm:px-8 sm:py-6 flex flex-col items-center justify-center shadow-lg" style={{minWidth: '90px', minHeight: '70px'}}>
                    <div className="mb-2">{merchant.icon}</div>
                    <div className="text-white/90 font-medium text-xs sm:text-sm">{merchant.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <motion.div 
            className="max-w-7xl mx-auto mt-20"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-center mt-24 relative z-10">
              <div className="text-gray-300">EMCard-approved merchants.</div>
            </div>
          </motion.div>
        </div>
          {/* Divider Line */}
        <div className="max-auto mx-auto mb-20 relative">
          <div
            className="absolute top-0 left-[10%] h-px w-[10%] md:left-[10%] md:w-[10%] lg:left-[20%] lg:w-[5%] z-10"
            style={{
              background: 'linear-gradient(90deg, #a855f7 0%, #fbbf24 100%)',
              boxShadow: '0 0 12px 3px #fbbf24',
            }}
          />
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
        {/* Feature Cards Row */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 sm:gap-8 mb-16 justify-center items-center font-[Inter,sans-serif]">
          {[
            {
              title: "Unlock spending possibilities",
              description: "Use your digital EasyMoneyCard virtually anywhere online.",
              icon: (
                <svg className="w-7 h-7 text-purple-400" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="16" height="16" rx="4" stroke="url(#cmdg)" strokeWidth="2"/>
                  <path d="M8 8h8v8H8V8z" stroke="url(#cmdg)" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="cmdg" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A855F7"/>
                      <stop offset="1" stopColor="#EC4899"/>
                    </linearGradient>
                  </defs>
                </svg>
              )
            },
            {
              title: "Top-up with EasyMoney",
              description: "EasyMoneyCard is just that, easy to issue and easy to spend with! Top-up anytime!",
              icon: (
                <svg className="w-7 h-7 text-purple-400" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="8" width="16" height="8" rx="2" stroke="url(#gradient2)" strokeWidth="2" fill="none"/>
                  <rect x="8" y="12" width="8" height="4" rx="1" fill="url(#gradient2)"/>
                  <defs>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#A855F7"/>
                      <stop offset="100%" stopColor="#EC4899"/>
                    </linearGradient>
                  </defs>
                </svg>
              )
            },
            {
              title: "$EMC Token Backing",
              description: "EasyMoneyCard is fully backed by our own internal token: $EMC.",
              icon: (
                <svg className="w-7 h-7 text-purple-400" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="url(#tokenG)" strokeWidth="2"/>
                  <path d="M12 8v8M8 12h8" stroke="url(#tokenG)" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="tokenG" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A855F7"/>
                      <stop offset="1" stopColor="#EC4899"/>
                    </linearGradient>
                  </defs>
                </svg>
              )
            }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full sm:w-[280px] flex-1"
            >
              <div className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-5 sm:px-6 sm:py-7 shadow-lg flex flex-col relative transition-all duration-300 hover:border-purple-400">
                <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 rounded-t-2xl" />
                
                <div className="flex items-start gap-3 mb-3">
                  {card.icon}
                  <div>
                    <div className="font-semibold text-base sm:text-[1.25rem] text-white mb-1">
                      {card.title}
                    </div>
                    <div className="text-gray-300 text-sm sm:text-[1rem] leading-snug">
                      {card.description}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main CTA Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-24 font-[Inter,sans-serif]">
      {/* Left Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="h-full bg-black/40 border border-white/10 rounded-2xl p-6 sm:p-12 flex flex-col justify-center shadow-lg"
      >
        <h2 className="text-xl sm:text-2xl md:text-[2rem] font-bold text-white mb-8 drop-shadow-lg leading-tight">
          Order your digital EasyMoneyCard.
          <br />
          Spending Made Easy.
        </h2>
        <Link
          href="/signup"
          className="inline-block px-8 py-3 bg-gray-700 text-white font-semibold rounded-full shadow hover:bg-gray-600 transition-all duration-300 text-base sm:text-lg"
        >
          Get your EasyMoneyCard
        </Link>
      </motion.div>

      {/* Right Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="h-full bg-black/40 border border-white/10 rounded-2xl p-6 sm:p-12 flex flex-col justify-center shadow-lg"
      >
        <div className="space-y-6">
          {["No annual fee", "Use IRL with Apple Pay", "Refund anytime"].map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40 border border-white/10">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-white font-medium text-base sm:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
          {/* Divider Line */}
        <div className="max-auto mx-auto mb-20 relative">
          <div
            className="absolute top-0 left-[10%] h-px w-[10%] md:left-[10%] md:w-[10%] lg:left-[20%] lg:w-[5%] z-10"
            style={{
              background: 'linear-gradient(90deg, #a855f7 0%, #fbbf24 100%)',
              boxShadow: '0 0 12px 3px #fbbf24',
            }}
          />
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
        {/* FAQ Section */}
        <motion.div
          className="max-w-7xl mx-auto mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: -20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="px-2 sm:px-4">
            <h3 className="text-xl sm:text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {faqData.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-xl p-4 sm:p-6 transition-all duration-300"
                >
                  <button
                    className="w-full flex items-center justify-between text-left focus:outline-none"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={openFaq[idx]}
                  >
                    <span className="text-base sm:text-xl font-bold text-white mb-3 drop-shadow-sm">
                      {faq.question}
                    </span>
                    <span
                      className={`ml-4 flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-black/30 transition-transform duration-300 ${
                        openFaq[idx] ? "rotate-180" : ""
                      }`}
                    >
                      {openFaq[idx] ? (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M6 15l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq[idx] ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="text-gray-300 drop-shadow-sm text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}