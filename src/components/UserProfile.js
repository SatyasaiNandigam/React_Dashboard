import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from ".";
import { useStateContext } from "../contexts/ContextProvider";

import { userProfileData } from "../data/dummy";
import avatar from "../data/avatar.jpg";
import { UserAuth } from "../contexts/AuthContext";

const UserProfile = () => {
  const { user, signOut } = UserAuth();
  const { setisClicked, initialState } = useStateContext();

  const HandleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={user?.photoURL ? user?.photoURL : avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-lg dark:text-gray-200">
            {" "}
            {user?.displayName}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400"> User </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            {" "}
            {user?.email}{" "}
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <Link
            to={item.title === "My Profile" ? "/AccountsandSettings" : "/"}
            key={index}
            onClick={() => setisClicked(initialState)}
          >
            <div
              key={index}
              className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
            >
              <button
                type="button"
                className=" text-xl rounded-lg p-3 hover:bg-light-gray text-gray-500 bg-violet-500"
              >
                {item.icon}
              </button>

              <div>
                <p className="font-semibold dark:text-gray-200 ">
                  {item.title}
                </p>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  {" "}
                  {item.desc}{" "}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-5">
        {user?.email ? (
          <button
            onClick={() => {
              HandleLogout();
              setisClicked(initialState);
            }}
            className="text-white bg-violet-500 w-full font-bold p-3 rounded-md"
          >
            LogOut
          </button>
        ) : (
          <button
            className="text-white w-full items-center bg-violet-500 p-3 font-bold  rounded-md"
            to="/Login"
            onClick={() => setisClicked(initialState)}
          >
            SignIn
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
