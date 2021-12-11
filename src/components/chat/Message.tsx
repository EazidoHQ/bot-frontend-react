import { IMessage } from '../../types/interface';
interface IProps {
  message: IMessage;
}
export default function Message({ message }: IProps) {
  let input: any = null;
  if (message.response) {
    input = (
      <input
        type={message.response.type}
        className='border-2 border-gray-200 p-2'
      />
    );
  }
  return (
    <div className={`flex items-end w-60 ${message.is_user ? 'ml-auto ' : ''}`}>
      {!message.is_user ? (
        <div className='w-8 h-8 rounded-full bg-gray-400  flex-shrink-0'></div>
      ) : (
        ''
      )}
      <p
        className={`rounded-xl  p-3 ml-2 text-sm ${
          !message.is_user
            ? 'ml-2 bg-gray-200 rounded-bl-none'
            : 'bg-pink-600 text-white rounded-br-none'
        }`}
      >
        {message.message}
      </p>
      {input}
    </div>
  );
}
