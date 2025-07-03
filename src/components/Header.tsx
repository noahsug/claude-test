export function Header() {
  return (
    <header className="w-full py-8 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-pixel font-black text-white text-glow-rainbow mb-6 tracking-wider">
          <div className="flex items-center justify-center gap-4">
            <span className="animate-pulse">✨</span>
            <div className="text-center">
              <div>HOUSEHOLD</div>
              <div>HEROES</div>
            </div>
            <span className="animate-pulse">✨</span>
          </div>
        </h1>
      </div>
    </header>
  );
}
