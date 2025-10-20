import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  theme?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  theme = 'primary',
}) => {
  const themeStyles = {
    primary: 'bg-primary text-white hover:bg-primary-1',
    secondary: 'bg-teal-300 text-white hover:bg-teal-700',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded focus:outline-none ${themeStyles[theme]}`}
    >
      {label}
    </button>
  );
};

export { Button };
