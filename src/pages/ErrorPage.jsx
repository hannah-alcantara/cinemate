import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-xl text-white'>404 Not Found</h1>
      <Link to='/'>Home</Link>
    </div>
  );
}
