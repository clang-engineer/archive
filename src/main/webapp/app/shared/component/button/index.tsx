import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  color?: "blue" | "gray" | "green" | "red" | "yellow" | "purple";
  variant?: "solid" | "outline";
  onClick?: () => void;
};

const colorClasses: Record<string, string> = {
  blue: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300",
  gray: "text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300",
  green: "text-white bg-green-700 hover:bg-green-800 focus:ring-green-300",
  red: "text-white bg-red-700 hover:bg-red-800 focus:ring-red-300",
  yellow: "text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300",
  purple: "text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300",
};

const outlineClasses: Record<string, string> = {
  blue: "text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white",
  gray: "text-gray-700 border border-gray-700 hover:bg-gray-700 hover:text-white",
  green: "text-green-700 border border-green-700 hover:bg-green-700 hover:text-white",
  red: "text-red-700 border border-red-700 hover:bg-red-700 hover:text-white",
  yellow: "text-yellow-700 border border-yellow-700 hover:bg-yellow-700 hover:text-white",
  purple: "text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white",
};

const Index: React.FC<ButtonProps> = ({ children, color = "blue", variant = "solid", onClick }) => {
  const baseClass = "px-5 py-2.5 text-sm font-medium rounded-lg focus:outline-none focus:ring-4";
  const variantClass = variant === "solid" ? colorClasses[color] : outlineClasses[color];

  return (
      <button type="button" className={`${baseClass} ${variantClass}`} onClick={onClick}>
        {children}
      </button>
  );
};

export default Index;
