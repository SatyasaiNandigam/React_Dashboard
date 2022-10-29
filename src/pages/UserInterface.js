import React,{useState} from "react";
import {Dismissable_Interfaces, Alert_Interfaces } from "../data/dummy";

const UserInterface = () => {

  const [dismissable, setDismissable] = useState(Dismissable_Interfaces);

  const onDeleteHandler = (id) => () =>{
    setDismissable(dismissable.filter(item => item.id !== id));
  }
  return (
    <div className="p-3 mt-14">
      <div className="title p-2 ml-2 items-center text-gray-400 text-xl font-medium mb-5">
        UI Elements/{" "}
        <span className="font-bold text-xl text-gray-500">Alerts</span>{" "}
      </div>

      <div className="wrapper p-5 flex flex-wrap flex-row gap-24 mt-4 justify-around">
        <div className="1 flex flex-col items-center justify-center shadow-lg">
          <div className="mainclass">
            <h3 className="p-3 pl-5 text-lg font-bold text-gray-500">Basic Alerts</h3>
            <ul className="">
              {Alert_Interfaces.map((item) => (
                <li key={item.id}>
                  <div className={`p-3 px-14 mb-3 mt-5 mx-4 rounded-md ${item.color} ${item.bgcolor}`}>{item.content}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="2 flex flex-col items-start shadow-lg">
          <div className="mainclass">
            <h3 className="p-3 pl-5 text-lg font-bold text-gray-500">
              Dismissable Alerts
            </h3>
            <ul>
              {dismissable.map((item) => (
                <li key={item.id}>
                  <div className={`flex flex-row gap-3 justify-between items-center px-2 py-3 mx-5 mt-2 rounded-md mb-3 ${item.bgcolor} ${item.color}`} role="alert">
                    <div className=''>{item.content}</div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                      onClick={onDeleteHandler(item.id)}
                    >
                      <span className="text-2xl px-3 font-bold" aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInterface;
