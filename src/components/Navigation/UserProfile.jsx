import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    // register
    <div className='md:ml-auto'>
      <Link to='/login'>Login</Link>
      {/* add shadow */}
      {/* <Link to='/signup' className='bg-m-grey px-3 py-2 rounded-xl shadow-lg'>
        Sign up
      </Link> */}
    </div>
  );
};

export default UserProfile;
