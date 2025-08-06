export default function TelegramButton() {
  return (
    <a
      href="https://t.me/your_channel_here" // ← replace with your actual Telegram link
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#0088cc] hover:bg-[#007ab8] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
    >
      {/* Button content wrapper */}
      <div className="flex items-center space-x-2 px-4 py-3 sm:px-4 sm:py-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path d="M9.73 14.51l-.39 3.62c.56 0 .8-.24 1.1-.52l2.64-2.48 5.48 4.01c1 .55 1.72.26 1.97-.92l3.57-16.75c.36-1.69-.63-2.36-1.7-1.96L1.5 9.5c-1.64.65-1.62 1.58-.28 1.99l4.91 1.53L18.02 5.9c.45-.29.87-.13.53.18" />
        </svg>

        {/* Only show text on small+ screens */}
        <span className="hidden sm:inline font-medium text-sm sm:text-base">
          Join Us on Telegram
        </span>
      </div>
    </a>
  );
}
