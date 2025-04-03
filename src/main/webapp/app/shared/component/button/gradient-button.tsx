import React from "react";

type GradientButtonProps = {
  children: React.ReactNode;
  color?:
      | "blue"
      | "green"
      | "cyan"
      | "teal"
      | "lime"
      | "red"
      | "pink"
      | "purple";
  onClick?: () => void;
};

const gradientClasses: Record<string, string> = {
  blue: "from-blue-500 via-blue-600 to-blue-700 shadow-blue-500/50 dark:shadow-blue-800/80 focus:ring-blue-300 dark:focus:ring-blue-800",
  green: "from-green-400 via-green-500 to-green-600 shadow-green-500/50 dark:shadow-green-800/80 focus:ring-green-300 dark:focus:ring-green-800",
  cyan: "from-cyan-400 via-cyan-500 to-cyan-600 shadow-cyan-500/50 dark:shadow-cyan-800/80 focus:ring-cyan-300 dark:focus:ring-cyan-800",
  teal: "from-teal-400 via-teal-500 to-teal-600 shadow-teal-500/50 dark:shadow-teal-800/80 focus:ring-teal-300 dark:focus:ring-teal-800",
  lime: "from-lime-200 via-lime-400 to-lime-500 text-gray-900 shadow-lime-500/50 dark:shadow-lime-800/80 focus:ring-lime-300 dark:focus:ring-lime-800",
  red: "from-red-400 via-red-500 to-red-600 shadow-red-500/50 dark:shadow-red-800/80 focus:ring-red-300 dark:focus:ring-red-800",
  pink: "from-pink-400 via-pink-500 to-pink-600 shadow-pink-500/50 dark:shadow-pink-800/80 focus:ring-pink-300 dark:focus:ring-pink-800",
  purple: "from-purple-500 via-purple-600 to-purple-700 shadow-purple-500/50 dark:shadow-purple-800/80 focus:ring-purple-300 dark:focus:ring-purple-800",
};

const GradientButton: React.FC<GradientButtonProps> = ({
                                                         children,
                                                         color = "blue",
                                                         onClick,
                                                       }) => {
  const baseClass =
      "text-white bg-gradient-to-r hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg";
  const colorClass = gradientClasses[color];

  return (
      <button type="button" className={`${baseClass} ${colorClass}`} onClick={onClick}>
        {children}
      </button>
  );
};

export default GradientButton;
