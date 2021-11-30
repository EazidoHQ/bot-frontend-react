export default function Header() {
  return (
    <header
      className='w-full bg-purple-600 py-2 px-4 bot-header border-b-2 border-gray-200 '
      style={{ height: '10%' }}
    >
      <div className='flex items-center'>
        <div className='w-12 h-12 rounded-full bg-gray-200'></div>
        <div className='ml-2'>
          <h5 className='text-white text-sm font-semibold'>Olly, Rex</h5>
          <p className='text-xs text-gray-200 mt-1 mb-0'>
            Get closer to your customer
          </p>
        </div>
      </div>
    </header>
  );
}
