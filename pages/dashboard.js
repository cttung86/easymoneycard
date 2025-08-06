import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [balance, setBalance] = useState(150.75);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateCards(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const topUp = async () => {
    setLoading(true);
    setMessage('');
    await fetch('/api/notify', {
      method: 'POST',
      body: JSON.stringify({ user: 'user@example.com', amount: 50 }),
      headers: { 'Content-Type': 'application/json' },
    });
    setBalance(b => b + 50);
    setTransactions(t => [
      { id: t.length + 1, date: new Date().toISOString().slice(0, 10), description: 'Top-Up', amount: +50 },
      ...t,
    ]);
    setMessage('Top-up successful! Admin notified.');
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-transparent p-4 sm:p-8 relative">
      <div
        className="absolute top-0 left-[5%] h-px w-[5%] md:left-[10%] md:w-[5%] lg:left-[20%] lg:w-[5%] z-10"
        style={{
          background: 'linear-gradient(90deg, #a855f7 0%, #fbbf24 100%)',
          boxShadow: '0 0 12px 2px #fbbf24',
        }}
      />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-white drop-shadow-2xl">$EMC Token</h1>

        {/* Token Info Section */}
        <div
          className={`bg-black/20 backdrop-blur-xl border border-white/20 rounded-xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-2xl shadow-black/20 hover:shadow-white/10 transition-transform duration-700 ease-out transform ${
            animateCards ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center md:justify-between mb-6 gap-4 md:gap-0">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-white drop-shadow-sm">$EMC Token</h2>
              <p className="text-gray-300 drop-shadow-sm text-sm sm:text-base">EasyMoneyCard Token Backing</p>
            </div>
            <div className="text-right">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 drop-shadow-lg">$0.85</div>
              <div className="text-xs sm:text-sm text-gray-400">Current Price</div>
            </div>
          </div>
          <p className="text-gray-300 drop-shadow-sm mb-6 text-sm sm:text-base">
            EasyMoneyCard is fully backed by its token: $EMC. Every card issued is backed by the $EMC token, ensuring security and stability.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Total Supply', value: '1,000,000' },
              { label: 'Circulating', value: '750,000' },
              { label: 'Market Cap', value: '$850,000' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/5 rounded-lg p-4">
                <div className="text-xl sm:text-2xl font-bold text-white">{value}</div>
                <div className="text-xs sm:text-sm text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Card Issuance Section */}
        <div
          className={`bg-black/20 backdrop-blur-xl border border-white/20 rounded-xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-2xl shadow-black/20 hover:shadow-white/10 transition-transform duration-700 ease-out transform ${
            animateCards ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          } delay-200`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4 sm:gap-0">
            <h2 className="text-xl sm:text-2xl font-semibold text-white drop-shadow-sm">Card Issuance</h2>
            <span className="text-2xl sm:text-3xl font-bold text-green-400 drop-shadow-lg">${balance.toFixed(2)}</span>
          </div>
          <p className="text-gray-300 drop-shadow-sm mb-6 text-sm sm:text-base">
            For only 50$, you will be issued with a Visa card in around 5 minutes, ready to add to Apple Pay and spend freely!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <button
              onClick={topUp}
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600/90 to-blue-600/90 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-400/30"
            >
              {loading ? 'Processing...' : 'Get your card now!'}
            </button>
            <button className="w-full px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Request Refund
            </button>
          </div>
          {message && <p className="text-green-400 text-center drop-shadow-sm">{message}</p>}
        </div>

        {/* Card Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div
            className={`bg-black/20 backdrop-blur-xl border border-white/20 rounded-xl p-6 shadow-2xl shadow-black/20 hover:shadow-white/10 transition-transform duration-700 ease-out transform ${
              animateCards ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            } delay-400`}
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 drop-shadow-sm">Card Features</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {[
                'Top-up fee: 1%',
                'Card issuance fee - 50$',
                'Maximum limit: Unlimited - No limits!',
                'Works IRL with Apple Pay',
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-300 drop-shadow-sm">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`bg-black/20 backdrop-blur-xl border border-white/20 rounded-xl p-6 shadow-2xl shadow-black/20 hover:shadow-white/10 transition-transform duration-700 ease-out transform ${
              animateCards ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            } delay-500`}
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 drop-shadow-sm">Supported Merchants</h3>
            <div className="grid grid-cols-3 gap-3">
              {['Apple', 'Amazon', 'Meta', 'Discord', 'Shopify', 'Klarna'].map((merchant, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-lg p-3 text-center text-xs sm:text-sm text-white/90 font-medium truncate"
                >
                  {merchant}
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mt-4">150M+ supported merchants worldwide</p>
          </div>
        </div>

        {/* Recent Transactions */}
        <div
          className={`bg-black/20 backdrop-blur-xl border border-white/20 rounded-xl p-4 sm:p-8 shadow-2xl shadow-black/20 hover:shadow-white/10 transition-transform duration-700 ease-out transform ${
            animateCards ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          } delay-600`}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white drop-shadow-sm">Recent Transactions</h2>
          <div className="overflow-x-auto rounded-lg">
            <table className="w-full min-w-[400px] sm:min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="text-left py-3 px-4 text-gray-300 font-semibold drop-shadow-sm text-xs sm:text-sm">Date</th>
                  <th className="text-left py-3 px-4 text-gray-300 font-semibold drop-shadow-sm text-xs sm:text-sm">Description</th>
                  <th className="text-right py-3 px-4 text-gray-300 font-semibold drop-shadow-sm text-xs sm:text-sm">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.length === 0 && (
                  <tr>
                    <td colSpan={3} className="text-center py-6 text-gray-400 text-sm italic">
                      No transactions yet.
                    </td>
                  </tr>
                )}
                {transactions.map(tx => (
                  <tr
                    key={tx.id}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-3 px-4 text-gray-300 drop-shadow-sm text-xs sm:text-sm">{tx.date}</td>
                    <td className="py-3 px-4 text-gray-300 drop-shadow-sm text-xs sm:text-sm">{tx.description}</td>
                    <td
                      className={`py-3 px-4 text-right font-semibold drop-shadow-sm text-xs sm:text-sm ${
                        tx.amount > 0 ? 'text-green-400' : 'text-red-400'
                      }`}
                    >
                      {tx.amount > 0 ? '+' : '-'}${Math.abs(tx.amount).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
