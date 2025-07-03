interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16', 
    lg: 'w-24 h-24'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} animate-spin rounded-full relative`}>
        {/* Outer spinning ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-400 border-r-orange-500"></div>
        {/* Inner spinning ring */}
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-pink-400 border-l-cyan-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        {/* Center dot */}
        <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}