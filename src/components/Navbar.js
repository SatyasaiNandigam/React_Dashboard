import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Chat, Notification, UserProfile } from ".";

import { useStateContext } from "../contexts/ContextProvider";
import { UserAuth } from "../contexts/AuthContext"

const ButtonNav = ({ title, customFunction, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunction()}
      style={{  }}
      className={`relative text-xl ${color} rounded-full p-3 hover:bg-light-gray`}
    >
      <span
        className={`absolute inline-flex ${dotColor} rounded-full h-2 w-2 right-2 top-2`}
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { setisMenu, isClicked , ClickHandler, screenSize, setscreenSize} = useStateContext();
  
  const {user} = UserAuth();

  useEffect(() => {
    const handleSize = () => setscreenSize(window.innerWidth);
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  } , [setscreenSize]);

  useEffect(() => {
    if(screenSize < 768){
      setisMenu(false);
    }else{
      setisMenu(true);
    }
  } , [screenSize,setisMenu]);


  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <ButtonNav
        title="Menu"
        customFunction={() => setisMenu((prev) => !prev)}
        color="text-violet-600"
        icon={<AiOutlineMenu />}/>

        <div className="flex" >
        <ButtonNav
        title="Chat"
        dotColor="bg-violet-900"
        customFunction={() => ClickHandler('chat')}
        color="text-violet-600"
        icon={<BsChatLeft />}/>

        <ButtonNav
        title="Notifications"
        dotColor="bg-violet-900"
        customFunction={() => ClickHandler('notification')}
        color="text-violet-600"
        icon={<RiNotification3Line />}/>

        <TooltipComponent content="Profile" position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => ClickHandler('userProfile')} >  
              <img className="rounded-full w-8 h-8" src={user?.photoURL ? user?.photoURL : avatar} alt="profile" />
              <p> {' '}
              <span className="text-gray-400 text-bold ml-1 text-14">{user!=null && user?.displayName}</span></p>
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}

        </div>

    </div>
    
  );
};

export default Navbar;
