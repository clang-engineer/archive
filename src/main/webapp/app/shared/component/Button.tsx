import React from "react";

const Button = ({
                  type = "button" as "button" | "submit" | "reset"
                  , onClick = (e) => {
  }, children = "" as string | JSX.Element,
                  className = ""
                }) => (
    <button type={type} onClick={onClick}
            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded
                    text-white 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 
                    hover:cursor-pointer
                    ${className}`}>
      {children}
    </button>
);

export default Button;