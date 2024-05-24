import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    // register
    <div className='md:ml-auto'>
      <Link to='/profile' className='m-4'>
        Log in
      </Link>
      {/* add shadow */}
      <button className='bg-m-grey px-3 py-2 rounded-xl shadow-lg'>
        Sign up
      </button>
    </div>
  );
};

export default UserProfile;
