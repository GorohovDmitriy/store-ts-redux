import React, { FC } from "react";
import "./Button.scss";
import classNames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  type: string;
  handleClick: () => void;
}

const ButtonCart: FC<ButtonProps> = ({ type, children, handleClick }) => {
  const buttonClass = classNames({
    btn: true,
    "btn-secondary": type === "secondary",
    "btn-primary": type === "primary",
  });

  return (
    <button onClick={handleClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default ButtonCart;
