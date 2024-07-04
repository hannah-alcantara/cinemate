export function Filter({ filter, setFilter }) {
  return (
    <div className='relative mb-8'>
      <div class='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
        <i className='fas fa-magnifying-glass w-4 h-4 text-gray-400' />
      </div>
      <input
        className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100'
        placeholder='Search'
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
      {/* TODO: button not working yet */}
      <button
        type='submit'
        className='text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-m-grey focus:ring-2 focus:ring-gray-400 font-medium rounded-lg text-sm px-4 py-2'
      >
        Search
      </button>
    </div>
  );
}
