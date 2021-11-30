import Message from './Message';
import { IMessage } from '../../types/interface';

export default function ChatList() {
  const message: IMessage = {
    message: 'hehehehehehe',
    sender: false,
  };
  return (
    <div className=' w-full bg-gray-100 p-3' style={{ height: '80%' }}>
      <Message message={message} />
    </div>
  );
}
