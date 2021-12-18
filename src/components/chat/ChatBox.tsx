import Button from '../Button';
import SendIcon from '../icon/SendIcon';

export default function ChatBox() {
  return (
    <div
      className='w-full border-t-2 border-gray-400 flex'
      style={{ height: '8%' }}
    >
      <input type='text' className='border-2 border-red-500' />
      <Button
        children={<SendIcon />}
        buttonClass=''
        onClick={() => console.log('clicked')}
      />
    </div>
  );
}
