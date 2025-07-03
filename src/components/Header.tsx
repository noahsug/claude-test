export function Header() {
  return (
    <header className="w-full py-8 px-4 relative overflow-hidden">
      {/* CSS sparkles background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-1/3 w-1 h-1 bg-pink-300 rounded-full animate-ping"></div>
        <div className="absolute top-6 left-1/2 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-12 right-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-3 left-1/6 w-1 h-1 bg-pink-300 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-10 right-1/6 w-2 h-2 bg-cyan-300 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-5 left-3/4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse delay-200"></div>
      </div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 mb-3 tracking-wide drop-shadow-lg">
          ✨ PIXEL CARDS ✨
        </h1>
        <p className="text-white/90 text-xl md:text-2xl font-semibold bg-black/20 rounded-full px-6 py-2 inline-block border border-white/30">
          🏠 Household Heroes Collection 🍌
        </p>
      </div>
    </header>
  );
}