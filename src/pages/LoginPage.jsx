import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [userCredentials, setUserCredentials] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //Note: email enumeration off to show specific error messages
  const errorMessages = {
    "auth/invalid-email": "This email address is not valid.",
    "auth/user-not-found": "No user found with this email address.",
    "auth/wrong-password": "Incorrect password. Please try again.",
  };

  function handleCredentials(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    // console.log(userCredentials);
  }

  function handleLogin(e) {
    e.preventDefault();
    setError("");
    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        // console.log(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage =
          errorMessages[errorCode] || "An unexpected error occurred.";
        setError(errorMessage);
      });
  }

  return (
    <section className='bg-white'>
      <div className='py-8 px-6 mx-auto max-w-screen-xl'>
        <div className='flex flex-col justify-center'>
          <h1 className='mb-4 text-3xl leading-10 font-courier font-bold tracking-tighter text-gray-900'>
            Welcome back!
          </h1>
          <p className='text-md text-gray-500'>
            This web app is designed to curate and organize your favorite films,
            creating a personalized library of extraordinary cinema. With
            Cinemate, you can easily explore, categorize, and revisit the movies
            that have left a lasting impact on you. This project showcases my
            skills and passion for app development, and is a part of my
            portfolio.
          </p>
        </div>
        <hr className='my-8 bg-black h-0.5' />
        <div>
          <h2 className='text-2xl font-bold text-gray-900'>
            Login to Cinemate
          </h2>
          <form className='mt-6 space-y-6' action='#'>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Your email
              </label>
              <input
                onChange={(e) => handleCredentials(e)}
                type='email'
                name='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                placeholder='Email address'
                required
              />
            </div>
            <div>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Your password
              </label>
              <input
                onChange={(e) => handleCredentials(e)}
                type='password'
                name='password'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                placeholder='•••••••••••'
                required
              />
              <div className='flex justify-end mt-3'>
                <Link
                  to='/resetpassword'
                  className='text-sm text-gray-900 hover:underline'
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            {error && (
              <div>
                <p className='text-xs text-red-600'>{error}</p>
              </div>
            )}
            <button
              onClick={(e) => {
                handleLogin(e);
              }}
              type='submit'
              className='w-full px-5 py-3 font-medium text-center text-white bg-black rounded-lg hover:bg-m-grey focus:ring-2 focus:ring-gray-300 sm:w-auto'
            >
              Login to your account
            </button>

            <div className='text-sm font-medium text-gray-900'>
              Not registered yet?{" "}
              <NavLink to='/signup' className='text-blue-600 hover:underline'>
                Create account
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
