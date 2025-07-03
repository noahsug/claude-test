import headerSparkles from '@/assets/images/ui/header-sparkles.png';

export function Header() {
  return (
    <header className="w-full py-8 px-4 relative">
      {/* Header sparkles background */}
      <div 
        className="absolute inset-0 opacity-30 bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${headerSparkles})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center top'
        }}
      ></div>
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