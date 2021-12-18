import Button from './../Button';
import { IMessage } from '../../types/interface';
import SendIcon from '../icon/SendIcon';

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
        <Button
          children={<SendIcon />}
          buttonClass='ml-1'
          onClick={() => console.log('clicked')}
        />
      </div>
    </div>
  );
  let Suggestions = message?.suggestions?.map((suggestion, index) => (
    <Button
      children={suggestion}
      buttonClass='px-4 py-2 mt-2 ml-2 bg-pink-600 rounded-md text-white'
      onClick={() => console.log('clicked')}
      key={index}
    />
  ));
  const MessageComponent = (
    <div className='max-w-sm'>
      <div
        className={`flex items-end   ${message.is_user ? 'justify-end ' : ''}`}
      >
        {!message.is_user ? (
          <div className='w-8 h-8 rounded-full bg-gray-400  flex-shrink-0'></div>
        ) : (
          ''
        )}
        <div
          className={`rounded-xl p-4   ${
            !message.is_user
              ? 'ml-2 bg-gray-200 rounded-bl-none w-full'
              : 'bg-pink-600 text-white rounded-br-none ml-auto'
          }`}
        >
          <p className='text-sm'>{message.message}</p>
          {message.expect_response && !message.is_user ? Input : ''}
        </div>
      </div>
      {message?.suggestions?.length && (
        <div className='flex'>
          <div className='h-8 w-8'></div>
          {Suggestions}
        </div>
      )}
    </div>
  );
  return MessageComponent;
}
