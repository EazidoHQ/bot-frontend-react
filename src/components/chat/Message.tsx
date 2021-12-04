import { IMessage } from '../../types/interface';
interface IProps {
  message: IMessage;
}
export default function Message({ message }: IProps) {
  return (
    <div className={`flex items-end w-60 ${message.sender ? 'ml-auto ' : ''}`}>
      {!message.sender ? (
        <div className='w-8 h-8 rounded-full bg-gray-400  flex-shrink-0'></div>
      ) : (
        ''
      )}
      <p
        className={`rounded-xl  p-3 ml-2 text-sm ${
          !message.sender
            ? 'ml-2 bg-gray-200 rounded-bl-none'
            : 'bg-pink-600 text-white rounded-br-none'
        }`}
      >
        {message.message}
      </p>
    </div>
  );
}
