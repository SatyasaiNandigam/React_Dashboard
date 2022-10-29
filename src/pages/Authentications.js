import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SiShopware } from "react-icons/si";

const Authentications = () => {
  const InitialState = {
    login: true,
    register: false,
    forgotPassword: false,
  };

  const [isClicked, setIsClicked] = useState(InitialState);

  const clickHandler1 = () => {
    setIsClicked((prev) => ({
      ...prev,
      login: true,
      register: false,
      forgotPassword: false,
    }));
  };

  const clickHandler2 = () => {
    setIsClicked((prev) => ({
      ...prev,
      login: false,
      register: true,
      forgotPassword: false,
    }));
  };

  const clickHandler3 = () => {
    setIsClicked((prev) => ({
      ...prev,
      login: false,
      register: false,
      forgotPassword: true,
    }));
  };

  return (
    <div className="flex flex-col mt-6 items-center justify-center">
      <div className="heading m-5  p-5">
        <p className="text-gray-400 font-medium text-xl">
          Account Settings/{" "}
          <span className="text-gray-600 font-bold text-xl">Account</span>{" "}
        </p>
      </div>
      <div className="content mx-5 w-fit">
        <div className="options flex flex-row ml-4">
          <button
            autoFocus
            onClick={clickHandler1}
            className={`  p-2 px-6 focus:bg-violet-400 focus:text-white active:bg-violet-400 active:text-white  hover:text-gray-700 text-gray-500 font-medium text-base rounded-md`}
          >
            Login
          </button>
          <button
            onClick={clickHandler2}
            className={` p-2 px-6 focus:bg-violet-400 focus:text-white active:bg-violet-400 active:text-white  hover:text-gray-700 text-gray-500 font-medium text-base rounded-md`}
          >
            Register
          </button>
          <button
            onClick={clickHandler3}
            className={` p-2 px-6 focus:bg-violet-400 focus:text-white active:bg-violet-400 active:text-white hover:text-gray-700 text-gray-500 font-medium text-base rounded-md`}
          >
            Forgot Password
          </button>
        </div>
      </div>

      {/* Login division */}

      <div className="login mt-5 flex flex-col justify-center items-center w-full">
        <div
          className={` ${
            isClicked.login === true ? {} : "hidden"
          } my-5 shadow-2xl rounded-lg`}
        >
          <div className="card mt-8 mx-6">
            <div className="heading text-2xl text-gray-600 p-2 mr-5 font-bold flex flex-row items-center justify-center">
              <SiShopware className="text-2xl text-violet-800" />
              <span className="ml-4">Login</span>
            </div>
            <h3 className="text-lg mt-8 font-semibold text-gray-600">
              Welcome to DashBoard
            </h3>
            <p className="text-sm font-normal text-gray-500 mt-1">
              please sing-in to your account and start the adventure.
            </p>
            <div className="form mt-6">
              <div className="share mb-8">
                <label className="text-gray-600 font-semibold text-sm ">
                  {" "}
                  EMAIL OR USERNAME
                </label>{" "}
                <br />
                <input
                  className="w-full px-2 rounded-md mt-1 p-2 outline-blue-500 border border-gray-300"
                  type="text"
                  placeholder="Enter your username or email"
                />
              </div>
              <div className="share mb-8">
                <div className="flex flex-row justify-between text-gray-600 font-semibold text-sm ">
                  <div>PASSWORD</div>
                  <div className="text-blue-500">
                    <button>forgot password</button>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder=".  .  .  .  ."
                  className="w-full px-2 rounded-md mt-1 p-2 outline-blue-500 border border-gray-300"
                />
              </div>
              <div className="text-base mb-8">
                <input className="text-lg mr-2" type="checkbox" />
                <span className="text-gray-500">Remember Me</span>
              </div>
              <button
                type="button"
                className="text-white w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-3 focus:outline-none"
              >
                Sign in
              </button>
              <p className="text-gray-500 font-sm text-center font-medium mb-8">
                New on our platform?{" "}
                <span>
                  <button onClick={clickHandler2} className="text-blue-500 font-xs font-light">
                    create an account
                  </button>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Register */}

        <div
          className={` ${
            isClicked.register === true ? {} : "hidden"
          } my-5 shadow-2xl rounded-lg`}
        >
          <div className="card mt-8 mx-6">
            <div className="heading text-2xl text-gray-600 p-2 mr-5 font-bold flex flex-row items-center justify-center">
              <SiShopware className="text-2xl text-violet-800" />
              <span className="ml-4">Sign Up</span>
            </div>
            <h3 className="text-lg mt-8 font-semibold text-gray-600">
              Adventure Starts here...
            </h3>
            <p className="text-sm font-normal text-gray-500 mt-1">
              Make your app management easy and fun! Register now.
            </p>
            <div className="form mt-6">
              <div className="share mb-8">
                <label className="text-gray-600 font-semibold text-sm ">
                  EMAIL
                </label>{" "}
                <br />
                <input
                  className="w-full px-2 rounded-md mt-1 p-2 outline-blue-500 border border-gray-300"
                  type="text"
                  placeholder="Enter your email"
                />
              </div>
              <div className="share mb-8">
                <label className="text-gray-600 font-semibold text-sm ">
                  PASSWORD
                </label>{" "}
                <br />
                <input
                  className="w-full px-2 rounded-md mt-1 p-2 outline-blue-500 border border-gray-300"
                  type="text"
                  placeholder="Enter your password"
                />
              </div>
              <div className="share mb-8">
                <div className="flex flex-row justify-between text-gray-600 font-semibold text-sm ">
                  <div>RE ENTER YOUR PASSWORD</div>
                </div>
                <input
                  type="text"
                  placeholder="Enter your password again"
                  className="w-full px-2 rounded-md mt-1 p-2 outline-blue-500 border border-gray-300"
                />
              </div>
              <div className="text-base mb-8">
                <input className="text-lg mr-2" type="checkbox" />
                <span className="text-gray-500">
                  I agree to{" "}
                  <button className="font-sm text-blue-500 text-semibold">
                    privacy policy & terms
                  </button>
                </span>
              </div>
              <button
                type="button"
                className="text-white w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-3 focus:outline-none"
              >
                Register
              </button>
              <p className="text-gray-500 font-sm text-center font-medium mb-8">
                Already have an account?{" "}
                <span>
                  <button onClick={clickHandler1} className="text-blue-500 font-xs font-light">
                    sing in instead
                  </button>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* forgot password */}

        <div
          className={` ${
            isClicked.forgotPassword === true ? {} : "hidden"
          } my-5 mx-5 p-3 shadow-2xl w-fit rounded-lg`}
        >
          <div className="card mt-8 lg:px-6">
            <div className="heading text-2xl text-gray-600 p-2 mr-5 font-bold flex flex-row items-center justify-center">
              <SiShopware className="text-2xl text-violet-800" />
              <span className="ml-4">Forgot Password</span>
            </div>
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
                  type="text"
                  placeholder="Enter your username or email"
                />
              </div>
              <button
                type="button"
                className="text-white w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-3 focus:outline-none"
              >
                Send Reset Link
              </button>
              <p className="text-gray-500 font-sm text-center font-medium mb-8">
                {" "}
                <span>
                  <button className="text-blue-500 font-xs font-light" onClick={clickHandler1}>
                     &lt; Back to login
                  </button>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentications;
