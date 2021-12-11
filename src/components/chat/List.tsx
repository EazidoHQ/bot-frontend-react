import Message from './Message';
import { IMessage } from '../../types/interface';

export default function ChatList() {
  const messages: Array<IMessage> = [
    {
      is_user: false,
      message: 'Hello, hi',
      expect_response: false,
      response: {
        type: 'email',
        question: 'what is your name',
      },
    },
  ];

  return (
    <div
      className=' w-full bg-gray-100 p-3 overflow-y-scroll'
      style={{ height: '80%' }}
    >
      {messages.map((message, index) => (
        <div className='mb-4' key={index}>
          <Message message={message} />
        </div>
      ))}
    </div>
  );
}
