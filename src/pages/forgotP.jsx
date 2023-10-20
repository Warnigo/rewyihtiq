import React, { useState } from "react";
import { auth } from "../firebase/config";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const handleResetPassword = async (e) => {
    e.preventDefault();
  
    try {
      await auth.sendPasswordResetEmail(email);
      setMessage("Password reset email sent. Please check your inbox.");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      setMessage(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm">
        <form
          onSubmit={handleResetPassword}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-2xl text-center font-bold mb-4">Forgot Password</h2>
          {message && (
            <div className="text-green-500 text-center mb-4">{message}</div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Reset Password
            </button>
            <Link
              to="/login"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
