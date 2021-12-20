import React from 'react';

interface Props {
  width?: string;
  height?: string;
  stroke?: string;
  fill?: string;
}

const SendIcon: React.FC<Props> = ({
  width = '18',
  height = '18',
  stroke = '#db2777',
  fill = 'none',
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='flex-shrink-0'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      stroke={stroke}
      strokeWidth='1.5'
      fill={fill}
      strokeLinecap='round'
      strokeLinejoin='round'
      style={{ transform: 'rotateZ(45deg)' }}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <line x1='10' y1='14' x2='21' y2='3' />
      <path d='M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5' />
    </svg>
  );
};

export default SendIcon;
