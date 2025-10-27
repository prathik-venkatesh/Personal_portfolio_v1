import svgPaths from "../imports/svg-wh62xc5c9y";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`relative ${className}`}>
      <svg 
        fill="none" 
        viewBox="0 0 1080 1080" 
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <g>
          {/* U bottom part - gray */}
          <path 
            d={svgPaths.p3f8f1100} 
            fill="currentColor" 
            className="text-muted-foreground/60"
          />
          {/* U top part - white/foreground */}
          <path 
            d={svgPaths.p1ff27b00} 
            fill="currentColor"
            className="text-foreground"
          />
          {/* P letter - white/foreground */}
          <path 
            d={svgPaths.p28c9900} 
            fill="currentColor"
            className="text-foreground"
          />
          {/* Blue dot */}
          <path 
            d={svgPaths.p3b86ab00} 
            fill="currentColor"
            className="text-primary"
          />
        </g>
      </svg>
    </div>
  );
}
