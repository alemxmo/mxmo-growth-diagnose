const MXMOLogo = ({ className = "h-16 w-auto", variant = "dark" }: { className?: string; variant?: "light" | "dark" }) => {
  const logoColor = variant === "light" ? "#DFC5AE" : "#242A36";
  const accentColor = "#9F8269";
  
  return (
    <div className="flex flex-col items-center gap-2">
      <svg 
        viewBox="0 0 280 80" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* M */}
        <path 
          d="M20 60 L20 20 L35 45 L50 20 L50 60 L42 60 L42 35 L35 50 L28 35 L28 60 Z" 
          fill={logoColor}
          strokeWidth="2"
        />
        
        {/* X */}
        <path 
          d="M70 20 L85 40 L100 20 L108 20 L90 45 L108 70 L100 70 L85 50 L70 70 L62 70 L80 45 L62 20 Z" 
          fill={logoColor}
          strokeWidth="2"
        />
        
        {/* M */}
        <path 
          d="M128 60 L128 20 L143 45 L158 20 L158 60 L150 60 L150 35 L143 50 L136 35 L136 60 Z" 
          fill={logoColor}
          strokeWidth="2"
        />
        
        {/* O */}
        <circle 
          cx="200" 
          cy="45" 
          r="22" 
          fill="none" 
          stroke={logoColor} 
          strokeWidth="8"
        />
        
        {/* Decorative dot */}
        <circle 
          cx="250" 
          cy="45" 
          r="6" 
          fill={accentColor}
        />
      </svg>
      
      {/* Alexandre Máximo text */}
      <div className={`text-xs font-light tracking-wider ${variant === 'light' ? 'text-white/70' : 'text-mxmo-dark/60'}`}>
        Alexandre Máximo
      </div>
    </div>
  );
};

export default MXMOLogo;