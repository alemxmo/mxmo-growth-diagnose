const MXMOLogo = ({ className = "h-16 w-auto", variant = "light" }: { className?: string; variant?: "light" | "dark" }) => {
  const logoColor = variant === "light" ? "#DFC5AE" : "#242A36";
  
  return (
    <svg 
      viewBox="0 0 200 60" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* M */}
      <path 
        d="M10 50 L10 20 L20 35 L30 20 L30 50 L25 50 L25 30 L20 40 L15 30 L15 50 Z" 
        fill={logoColor}
        style={{ fontWeight: 'bold' }}
      />
      
      {/* X */}
      <path 
        d="M45 20 L55 35 L65 20 L70 20 L57.5 37.5 L70 55 L65 55 L55 40 L45 55 L40 55 L52.5 37.5 L40 20 Z" 
        fill={logoColor}
        style={{ fontWeight: 'bold' }}
      />
      
      {/* M */}
      <path 
        d="M85 50 L85 20 L95 35 L105 20 L105 50 L100 50 L100 30 L95 40 L90 30 L90 50 Z" 
        fill={logoColor}
        style={{ fontWeight: 'bold' }}
      />
      
      {/* O */}
      <circle 
        cx="130" 
        cy="37.5" 
        r="15" 
        fill="none" 
        stroke={logoColor} 
        strokeWidth="5"
      />
      
      {/* Decorative element */}
      <circle 
        cx="170" 
        cy="37.5" 
        r="3" 
        fill="#9F8269"
      />
    </svg>
  );
};

export default MXMOLogo;