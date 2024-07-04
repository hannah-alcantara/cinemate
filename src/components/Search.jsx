import { useState } from "react";

export function Search() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className='absolute top-16 left-0 z-10 backdrop-blur-lg bg-black bg-opacity-80 h-18 p-5 w-full drop-shadow-2xl'>
      <input
        className='h-10 w-full pl-10 text-md font-courier text-gray-900 border border-gray focus:outline-none placeholder:italic'
        placeholder='Search'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <span className='absolute left-9 top-7'>
        <i className='fas fa-magnifying-glass text-gray-400 text-sm' />
      </span>
    </div>
  );
}
