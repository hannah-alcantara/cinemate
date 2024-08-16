import { useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupPage = () => {
  const [userCredentials, setUserCredentials] = useState([]);
  const [error, setError] = useState("");

  function handleCredentials(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  }

  //Add: Required input fields. Show error message when there are empty input fields.
  function handleSignUp(e) {
    e.preventDefault();
    setError("");

    if (userCredentials.password !== userCredentials.confirmPassword) {
      setError("Passwords do not match. Please try again.");
    }

    createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessages = {
          "auth/email-already-in-use": "This email address is already in use.",
          "auth/invalid-email": "This email address is not valid.",
          "auth/weak-password": "Password must have a minimum of 6 characters.",
        };
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
            Your Personal Collection of Cinematic Masterpieces
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
            Sign up to Cinemate
          </h2>
          <form className='mt-6 space-y-6' action='#'>
            <div className='grid grid-cols-2 gap-6'>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900'>
                  First name
                </label>
                <input
                  type='firstName'
                  label='First Name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                  placeholder='First Name'
                  required
                />
              </div>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900'>
                  Last Name
                </label>
                <input
                  type='lastName'
                  label='Last Name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                  placeholder='Last Name'
                  required
                />
              </div>
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-gray-900'>
                Email address
              </label>
              <input
                onChange={(e) => {
                  handleCredentials(e);
                }}
                type='email'
                name='email'
                label='Email address'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                placeholder='Email address'
                required
              />
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-gray-900'>
                Password
              </label>
              <input
                onChange={(e) => {
                  handleCredentials(e);
                }}
                type='password'
                name='password'
                label='Password'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                placeholder='•••••••••••'
                required
              />
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-gray-900'>
                Confirm Password
              </label>
              <input
                onChange={(e) => {
                  handleCredentials(e);
                }}
                type='password'
                name='confirmPassword'
                label='confirmPassword'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                placeholder='•••••••••••'
                required
              />
            </div>
            {error && (
              <div>
                <p className='text-xs text-red-600'>{error}</p>
              </div>
            )}
            <button
              onClick={(e) => {
                handleSignUp(e);
              }}
              type='submit'
              className='w-full px-5 py-3 font-medium text-center text-white bg-black rounded-lg hover:bg-m-grey focus:ring-2 focus:ring-gray-300 sm:w-auto'
            >
              Register
            </button>
            <div className='text-sm font-medium text-gray-900'>
              Already have an account?{" "}
              <NavLink to='/login' className='text-blue-600 hover:underline'>
                Log in
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
