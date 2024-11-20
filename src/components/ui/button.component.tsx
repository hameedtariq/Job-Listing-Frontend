import React from 'react';

export type ButtonProps = {
  label: string;
  onClick?: () => void;
  isLoading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, isLoading }) => {
  return (
    <button
      onClick={isLoading ? undefined : onClick}
      className={`max-w-fit px-4 py-2 text-white font-medium rounded-md shadow-md transition duration-300 ${
        isLoading
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-primary hover:bg-green-900 cursor-pointer'
      }`}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <span className="loader mr-2"></span>
          {label}
        </div>
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
