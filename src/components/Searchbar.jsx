const Searchbar = () => {
  return (
    <div className='relative'>
      <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
        <i className='fa fa-magnifying-glass fa-text-gray-400 text-sm' />
      </div>
      <input
        type='text'
        placeholder='Find a Film'
        className='h-14 w-full p-4 ps-10 text-md font-courier text-gray-900 border border-gray-300 rounded-lg shadow-2xl focus:outline-none'
        required
      />
      <button
        type='submit'
        className='absolute end-2.5 bottom-2.5 bg-black font-medium rounded-md text-sm px-4 py-2 hover: hover:bg-m-grey'
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
