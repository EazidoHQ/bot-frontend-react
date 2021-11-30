import { IMessage } from '../../types/interface';
interface IProps {
  message: IMessage;
}
export default function Message({ message }: IProps) {
  return (
    <div className='flex items-end'>
      <div className='w-8 h-8 rounded-full bg-gray-400'></div>
      <div className='bg-gray-200 rounded-md rounded-bl-none p-3 w-4/5 ml-2'>
        {message.message}
      </div>
    </div>
  );
}
