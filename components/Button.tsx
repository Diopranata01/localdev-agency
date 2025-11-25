import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 active:scale-95";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-brand-dark shadow-lg shadow-brand-orange/20",
    secondary: "bg-brand-yellow text-brand-black hover:bg-yellow-300 shadow-md",
    outline: "border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white",
    ghost: "text-brand-gray hover:text-brand-orange bg-transparent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
};

export default Button;