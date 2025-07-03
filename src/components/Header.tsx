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
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-pixel font-black text-white text-glow-rainbow mb-6 tracking-wider animate-pulse">
          ✨ PIXEL CARDS ✨
        </h1>
        <p className="text-white/95 text-lg md:text-xl lg:text-2xl font-pixel bg-black/30 rounded-2xl px-8 py-3 inline-block border-4 border-white/40 shadow-lg text-shadow-pixel backdrop-blur-sm">
          🏠 Household Heroes Collection 🍌
        </p>
      </div>
    </header>
  );
}