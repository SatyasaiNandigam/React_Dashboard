import React, { useEffect, useState } from "react";
import { SiShopware } from "react-icons/si";
import { UserAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { SignUpWithEmail,user } = UserAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(false);

  const SubmitHandler = async () => {
    if (password !== confirmpassword) {
      return setError("Password does not match");
    }
    try {
      setLoading(true);
      setError("");
      await SignUpWithEmail(email, password);
    } catch (error) {
      return setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user,navigate]);

  return (
    <div className=" m-auto mt-10 flex justify-center items-center shadow-xl rounded-lg">
      <div className="card mt-8 mx-6">
        <div className="heading text-2xl text-gray-600 p-2 mr-5 font-bold flex flex-row items-center justify-center">
          <SiShopware className="text-2xl text-violet-800" />
          <span className="ml-4">Sign Up</span>
        </div>
        {error && (
          <h1 className="p-3 mt-5 text-sm text-center rounded-lg shadow-md text-gray-800 bg-red-200">
            {error}
          </h1>
        )}
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
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          </div>
          <div className="share mb-8">
            <label className="text-gray-600 font-semibold text-sm ">
              PASSWORD
            </label>{" "}
            <br />
            <input
              className="w-full px-2 rounded-md mt-1 p-2 outline-blue-500 border border-gray-300"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <div className="share mb-8">
            <div className="flex flex-row justify-between text-gray-600 font-semibold text-sm ">
              <div>RE ENTER YOUR PASSWORD</div>
            </div>
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            onClick={SubmitHandler}
            disabled={Loading}
            className="text-white w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-3 focus:outline-none"
          >
            Register
          </button>
          <p className="text-gray-500 font-sm text-center font-medium mb-8">
            Already have an account?{" "}
            <span>
              <button className="text-blue-500 font-xs font-light">
                <Link to="/login">sing in instead</Link>
              </button>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
