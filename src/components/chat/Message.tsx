import { IMessage } from '../../types/interface';
interface IProps {
  message: IMessage;
}
export default function Message({ message }: IProps) {
  let Input = (
    <div>
      <p className='font-semibold mb-2 text-sm'>
        {message?.response?.question}?
      </p>
      <div className='border-2 border-pink-600 bg-transparent w-full px-2 py-2 rounded-md text-sm flex'>
        <input
          type={message?.response?.type}
          className='focus:outline-none bg-transparent w-full'
        />
        <button>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='stroke-current flex-shrink-0'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <line x1='10' y1='14' x2='21' y2='3' />
            <path d='M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5' />
          </svg>
        </button>
      </div>
    </div>
  );
  const MessageComponent = (
    <div
      className={`flex items-end max-w-md  ${
        message.is_user ? 'ml-auto ' : ''
      }`}
    >
      {!message.is_user ? (
        <div className='w-8 h-8 rounded-full bg-gray-400  flex-shrink-0'></div>
      ) : (
        ''
      )}
      <div
        className={`rounded-xl  p-3 ml-2  ${
          !message.is_user
            ? 'ml-2 bg-gray-200 rounded-bl-none w-full'
            : 'bg-pink-600 text-white rounded-br-none ml-auto'
        }`}
      >
        <p className='text-sm'>{message.message}</p>
        {message.expect_response && !message.is_user ? Input : ''}
      </div>
    </div>
  );
  return MessageComponent;
}
