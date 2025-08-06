import React from 'react';

const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        {/* Cercle principal */}
        <div className={`${sizeClasses[size]} border-4 border-red-400/20 rounded-full animate-spin`}>
          <div className="absolute inset-0 border-4 border-transparent border-t-red-400 rounded-full animate-spin"></div>
        </div>
        
        {/* Particules d'animation */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-red-400 rounded-full animate-ping"
              style={{
                left: `${25 + i * 25}%`,
                top: `${25 + i * 25}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>
        
        {/* Point central */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 