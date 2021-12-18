import Message from './Message';
import { IMessage } from '../../types/interface';

export default function ChatList() {
  const messages: Array<IMessage> = [
    {
      is_user: false,
      message: 'Hello, hi',
      expect_response: false,
      suggestions: ['Show me'],
    },
    {
      is_user: false,
      message: '',
      expect_response: true,
      response: {
        type: 'email',
        question: 'what is your name',
      },
    },
    {
      is_user: true,
      message: 'I am Olly, wondeful, i see what you did there',
      expect_response: false,
    },
    {
      is_user: true,
      message: 'Moriarity is clever, i guess',
      expect_response: false,
    },
  ];

  return (
    <div
      className=' w-full bg-gray-100 p-3 overflow-y-scroll'
      style={{ height: '82%' }}
    >
      {messages.map((message, index) => (
        <div className='mb-4' key={index}>
          <Message message={message} />
        </div>
      ))}
    </div>
  );
}
