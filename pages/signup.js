import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const sendOtp = () => {
    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }
    setError('');
    setOtpSent(true);
    alert('OTP sent! (simulated)');
  };

  const verifyOtp = () => {
    if (otp === '123456') { // fixed OTP for demo
      router.push('/dashboard');
    } else {
      setError('Invalid OTP');
    }
  };

  return (
    <>
      {/* Divider Line */}
      <div className="max-auto mx-auto relative">
        <div
          className="absolute top-0 left-[10%] h-px w-[10%] md:left-[10%] md:w-[10%] lg:left-[20%] lg:w-[5%] z-10"
          style={{
            background: 'linear-gradient(90deg, #a855f7 0%, #fbbf24 100%)',
            boxShadow: '0 0 12px 3px #fbbf24',
          }}
        />
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center bg-transparent px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-black/20 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-xl shadow-2xl shadow-black/20 hover:shadow-white/10 transition-all duration-300">
            <div className="text-center mb-8 px-2 sm:px-4">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white drop-shadow-lg leading-tight">
                Get your EasyMoneyCard
              </h2>
              <p className="text-gray-300 drop-shadow-sm text-sm sm:text-base">
                Instantly create and top-up your EasyMoneyCard and enjoy hassle-free online shopping.
              </p>
            </div>

            {!otpSent ? (
              <>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-white/90 text-sm font-medium mb-2 drop-shadow-sm"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                  />
                </div>
                {error && (
                  <p className="text-red-400 mb-4 text-sm drop-shadow-sm" role="alert">
                    {error}
                  </p>
                )}
                <button
                  onClick={sendOtp}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600/90 to-blue-600/90 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-400/30"
                >
                  Send OTP
                </button>
              </>
            ) : (
              <>
                <div className="mb-6">
                  <label
                    htmlFor="otp"
                    className="block text-white/90 text-sm font-medium mb-2 drop-shadow-sm"
                  >
                    Verification Code
                  </label>
                  <input
                    id="otp"
                    type="text"
                    placeholder="Enter OTP (use 123456)"
                    value={otp}
                    onChange={e => setOtp(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:bg-white/20 transition-all duration-300"
                  />
                </div>
                {error && (
                  <p className="text-red-400 mb-4 text-sm drop-shadow-sm" role="alert">
                    {error}
                  </p>
                )}
                <button
                  onClick={verifyOtp}
                  className="w-full px-6 py-3 bg-gradient-to-r from-green-600/90 to-emerald-600/90 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-400/30"
                >
                  Verify & Get Card
                </button>
              </>
            )}

            <p className="text-gray-400 text-sm text-center mt-6 drop-shadow-sm px-2 sm:px-4">
              By continuing, you agree to our Terms of Use and Privacy Policy
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
