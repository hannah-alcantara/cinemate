import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className='bg-black p-8 text-white '>
      <div className='max-w-screen-xl mx-auto'>
        <Link to='/' className='text-3xl font-bold font-oswald'>
          CINEMATE
        </Link>
        <ul className='flex justify-between my-6'>
          <li>
            <Link to='#'>About</Link>
          </li>
          <li>
            <Link to='#'>Contact</Link>
          </li>
          <li>
            <Link to='#'>API</Link>
          </li>
          <li>
            <Link to='#'>Github</Link>
          </li>
        </ul>
        <hr className='my-6' />
        <span className='block text-sm'>
          © 2023{" "}
          <Link to='#' className='hover:underline'>
            CINEMATE™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
