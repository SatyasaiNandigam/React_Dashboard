import { useEffect, useState } from "react";
import { SiShopware } from "react-icons/si";
import GoogleButton from "react-google-button";
import { UserAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const { googlesignIn, user, LoginWithEmail } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const HandleGoogleSignIn = async () => {
    try {
      await googlesignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const HandleSubmit = async () => {
    try {
      await LoginWithEmail(email, password);
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/React_Dashboard/");
    }
  }, [user, navigate]);

  return (
    <div className="login mt-5 flex flex-col justify-center items-center w-full">
      <div className={` my-5 shadow-2xl rounded-lg`}>
        <div className="card mt-8 mx-6">
          <div className="heading text-2xl text-gray-600 p-2 mr-5 font-bold flex flex-row items-center justify-center">
            <SiShopware className="text-2xl text-violet-800" />
            <span className="ml-4">Login</span>
          </div>
          {error && (
            <h1 className="p-3 mt-5 text-sm text-center rounded-lg shadow-md text-gray-800 bg-red-200">
              {error}
            </h1>
          )}
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
                EMAIL
              </label>{" "}
              <br />
              <input
                className="w-full px-2 rounded-md mt-1 p-2 outline-blue-500 border border-gray-300"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your username or email"
              />
            </div>
            <div className="share mb-8">
              <div className="flex flex-row justify-between text-gray-600 font-semibold text-sm ">
                <div>PASSWORD</div>
                <div className="text-blue-500">
                  <Link to="/forgotpassword">forgot password</Link>
                </div>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-2 rounded-md mt-1 p-2 outline-blue-500 border border-gray-300"
              />
            </div>
            <div className="text-base mb-8">
              <input className="text-lg mr-2" type="checkbox" />
              <span className="text-gray-500">Remember Me</span>
            </div>
            <button
              type="button"
              onClick={HandleSubmit}
              className="text-white w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-3 focus:outline-none"
            >
              Sign in
            </button>
            <h2 className="text-gray-600 text-base text-center font-bold mb-5">
              OR
            </h2>
            <div className="text-sm mb-6 pl-12">
              <GoogleButton onClick={HandleGoogleSignIn} />
            </div>

            <p className="text-gray-500 font-sm text-center font-medium mb-8">
              New on our platform?{" "}
              <span>
                <button className="text-blue-500 font-xs font-light">
                  <Link to="/Register"> create an account</Link>
                </button>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
