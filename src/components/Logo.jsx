import { Link } from "react-router-dom";

export function Logo() {
  return (
    <div className='w-1/3 flex justify-center'>
      <Link href='/' className='text-2xl font-bold font-oswald '>
        CINEMATE
      </Link>
    </div>
  );
}
