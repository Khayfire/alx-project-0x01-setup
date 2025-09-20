import React from "react";

interface ButtonProps {
  title: string;
  styles?: string;
}

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
    function clsx(arg0: string, styles: string | undefined): string | undefined {
        throw new Error("Function not implemented.");
    }

  return (
    <button
      className={clsx(
        "px-4 py-2 font-semibold transition-colors duration-200",
        styles
      )}
    >
      {title}
    </button>
  );
};

export default Button;
