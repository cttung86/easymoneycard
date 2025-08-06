export default function SupportChat() {
  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button className="w-12 h-12 bg-black/20 backdrop-blur-xl border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-white/10">
        <svg 
          className="w-6 h-6 text-white/90 group-hover:text-white transition-colors drop-shadow-sm" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
          />
        </svg>
      </button>
    </div>
  );
} 