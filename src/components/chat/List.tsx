import Message from './Message';
import { IMessage } from '../../types/interface';

export default function ChatList() {
  const messages: Array<IMessage> = [
    {
      message: 'hello',
      sender: false,
      response: {
        expected: 'email',
        question: 'what is your name',
      },
    },
    {
      message: 'Yo! who are you what do you want',
      sender: true,
    },
    {
      message: 'hello',
      sender: false,
    },
    {
      message: 'Yo! who are you what do you want',
      sender: true,
    },
    {
      message: 'hello',
      sender: false,
    },
    {
      message: 'Yo! who are you what do you want',
      sender: true,
    },
    {
      message: 'hello',
      sender: false,
    },
    {
      message: 'Yo! who are you what do you want',
      sender: true,
    },
    {
      message: 'hello',
      sender: false,
    },
    {
      message: 'Yo! who are you what do you want',
      sender: true,
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
