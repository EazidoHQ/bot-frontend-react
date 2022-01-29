import React from 'react';

interface IProps {
  buttonClass?: string;
  children?: React.ReactNode;
  onClick: () => void;
}
const Button = ({
  buttonClass = 'px-4 py-2 bg-pink-600 rounded-md text-white',
  children,
  onClick,
}: IProps): JSX.Element => {
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
