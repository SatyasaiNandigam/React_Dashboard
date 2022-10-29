import React, {useState} from "react";
import { SiShopware } from "react-icons/si";
import {Link} from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

const ForgotPassword = () => {
  const { ResetPassword } = UserAuth();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const HandleSubmit = async() =>{
    try {
      setError("");
      setMessage("");
      await ResetPassword(email);
      setMessage("Check your inbox for further instructions");
    } catch (error) {
        setError("Failed to reset password");
    }
  }


  return (
    <div className=" my-28 px-5 p-3 shadow-2xl w-fit m-auto rounded-lg">
      <div className="card mt-8 lg:px-6">
        <div className="heading text-2xl text-gray-600 p-2 mr-5 font-bold flex flex-row items-center justify-center">
          <SiShopware className="text-2xl text-violet-800" />
          <span className="ml-4">Forgot Password</span>
        </div>
        {error && (
          <h1 className="p-3 mt-5 text-sm text-center rounded-lg shadow-md text-gray-800 bg-red-200">
            {error}
          </h1>
        )}
        {message && (
          <h1 className="p-3 mt-5 text-sm text-center rounded-lg shadow-md text-white bg-blue-500">
            {message}
          </h1>
        )}
        <h3 className="text-lg mt-8 font-semibold text-gray-600">
          Forgot Password ?
        </h3>
        <p className="text-sm font-normal text-gray-500 mt-1">
          Enter your email and we'll send you instructions to reset your
          password
        </p>
        <div className="form mt-6">
          <div className="share mb-8">
            <label className="text-gray-600 font-semibold text-sm ">
              {" "}
              EMAIL
            </label>{" "}
            <br />
            <input
              className="w-full px-2 rounded-md mt-1 p-2 outline-blue-500 border border-gray-300"
              type="Email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your username or email"
            />
          </div>
          <button
            type="button"
            onClick={HandleSubmit}
            className="text-white w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-3 focus:outline-none"
          >
            Send Reset Link
          </button>
          <p className="text-gray-500 font-sm text-center font-medium mb-8">
            {" "}
            <span>
              <Link to='/login' className="text-blue-500 font-xs font-bold">
                &lt; Back to login
              </Link>
            </span>
          </p>
        </div>
      </div>
      <h1 className="text-center">Need an account? <Link to='/register' className="text-blue-600 font-bold text-sm">create an account</Link> </h1>
    </div>
  );
};

export default ForgotPassword;
