import { motion } from 'motion/react';
import Peep34 from '../imports/Peep34';
import Peep16 from '../imports/Peep16';
import Peep85 from '../imports/Peep85';

interface CharacterAvatarProps {
  type: 'peep34' | 'peep16' | 'peep85';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  className?: string;
}

export function CharacterAvatar({ 
  type, 
  size = 'md', 
  animated = false,
  className = '' 
}: CharacterAvatarProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32'
  };

  const Character = type === 'peep34' ? Peep34 : type === 'peep16' ? Peep16 : Peep85;

  if (animated) {
    return (
      <motion.div
        className={`${sizeClasses[size]} ${className}`}
        whileHover={{ 
          scale: 1.1, 
          rotate: [0, -5, 5, -5, 0],
          transition: { duration: 0.5 }
        }}
      >
        <Character />
      </motion.div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <Character />
    </div>
  );
}
