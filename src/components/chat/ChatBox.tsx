import Button from '../Button';
import Attachment from '../icon/Attachment';
import SendIcon from '../icon/SendIcon';

export default function ChatBox() {
  return (
    <div
      className='w-full  border-gray-400 flex items-center px-4 py-2'
      style={{ height: '8%' }}
    >
      <Button
        children={<Attachment stroke='#cbd5e1' width='22' height='22' />}
        buttonClass=''
        onClick={() => console.log('clicked')}
      />
      <input
        type='text'
        className='border-1 border-gray-200 rounded-full w-5/6 py-2 px-2 ml-2 text-sm'
        style={{ borderWidth: '1px' }}
        placeholder='Type here .....'
      />

      <Button
        children={<SendIcon stroke='#fff' fill='#fff' width='22' height='22' />}
        buttonClass='w-10 h-10 rounded-full bg-pink-400 flex justify-center items-center ml-2'
        onClick={() => console.log('clicked')}
      />
    </div>
  );
}
