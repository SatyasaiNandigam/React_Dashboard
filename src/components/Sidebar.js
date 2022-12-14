import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";
import {useStateContext} from '../contexts/ContextProvider';

const Sidebar = () => {
  const {isMenu, setisMenu, screenSize} = useStateContext();

  const SidebarHandler = () => {
    if(isMenu && screenSize < 768){
      setisMenu(false);
    }
  }

  const LinkActive =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounder-lg text-violet-600 bg-violet-200  rounded-md text-md m-2";
  const LinkNormal =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounder-lg  text-md text-violet-600 dark:text-gray-200 dark:hover:text-black hover:bg-slate-100 m-2";
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {isMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={SidebarHandler}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight  dark:text-violet-600 text-violet-700"
            >
              <SiShopware className="text-2xl text-violet-800" />{" "}
              <span>Satya</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setisMenu((prev)=>!prev)}
                className="text-xl rounded-full p-3 hover:bg-slate-100 mt-4 block md:hidden"
              >
                <MdOutlineCancel className="text-2xl text-violet-800" />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase ">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name==='Dashboard'? '': link.name}`}
                    key={link.name}
                    onClick={SidebarHandler}
                    className={({ isActive }) =>
                      isActive ? LinkActive : LinkNormal
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
