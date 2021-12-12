import React from 'react';

interface Props {
  buttonClass?: string;
  children?: React.ReactNode;
  onClick: () => void;
}
const Button: React.FC<Props> = ({
  buttonClass = 'px-4 py-2 bg-pink-600 rounded-md text-white',
  children,
  onClick,
}) => {
  return <button className={buttonClass}> {children} </button>;
};

export default Button;
