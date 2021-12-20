import React from 'react';

interface Props {
  width?: string;
  height?: string;
  stroke?: string;
  fill?: string;
}

const Attachment: React.FC<Props> = ({
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
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5' />
    </svg>
  );
};

export default Attachment;
