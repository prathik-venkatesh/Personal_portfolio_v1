import { motion } from 'motion/react';

interface IllustrationDecorProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
  className?: string;
}

export function IllustrationDecor({ 
  src, 
  alt, 
  size = 'md',
  delay = 0,
  className = '' 
}: IllustrationDecorProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className}`}
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ 
        scale: 1.1, 
        rotate: 5,
        transition: { duration: 0.2 }
      }}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
      />
    </motion.div>
  );
}
