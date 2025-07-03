import loadingSpinner from '@/assets/images/ui/loading-spinner.png';

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
      <div 
        className={`${sizeClasses[size]} animate-spin rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 p-1`}
        style={{
          backgroundImage: `url(${loadingSpinner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="w-full h-full bg-transparent rounded-full border-2 border-dashed border-white/50"></div>
      </div>
    </div>
  );
}