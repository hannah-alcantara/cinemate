import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  //Note: email enumeration off to show specific error messages
  const errorMessages = {
    "auth/invalid-email": "This email address is not valid.",
    "auth/user-not-found": "No account found with this email address.",
  };

  function handlePasswordReset(e) {
    e.preventDefault();
    setError("");
    setMessage("");

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("Email sent! Please check your inbox.");
        setError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage =
          errorMessages[errorCode] ||
          "Failed to reset password. Please try again.";
        setError(errorMessage);
      });
  }

  return (
    <section className='bg-white'>
      <div className='py-8 px-6 mx-auto max-w-screen-xl'>
        <h1 className='text-2xl font-bold text-gray-900'>
          Forgot your Password?
        </h1>
        <p className='mt-3 text-md text-gray-500'>
          No worries, we'll send you an email with instructions to reset your
          password.
        </p>
        <form className='mt-6 space-y-6' action='#'>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              value={email}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
              placeholder='Email'
              required
            />
          </div>
          <div className='text-sm'>
            {message && <p className='text-green-700'>{message}</p>}
            {error && <p className='text-red-700'>{error}</p>}
          </div>
          <button
            onClick={(e) => {
              handlePasswordReset(e);
            }}
            type='submit'
            className='w-full px-5 py-3 font-medium text-center text-white bg-black rounded-lg hover:bg-m-grey focus:ring-2 focus:ring-gray-300 sm:w-auto'
          >
            Reset Password
          </button>

          <div>
            <i className='fas fa-arrow-left mx-2 text-[10px] text-black' />
            <Link to='/login' className='text-sm font-medium text-gray-900'>
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ResetPasswordPage;
