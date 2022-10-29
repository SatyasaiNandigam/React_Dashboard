import React from "react";
import Chart from "../components/charts/chart";
import Featured from "../components/featured/feature";
import Table from "../components/Table/Table";
// import { BsCurrencyDollar } from 'react-icons/bs'
// import {GoPrimitiveDot} from 'react-icons/go'
import Widget from "../components/widgets";

const DashBoard = () => {
  return (
    <div className="homeContainer">
      <div className="widgets flex flex-wrap p-5 gap-4 ">
        <Widget type="users" />
        <Widget type="orders" />
        <Widget type="earnings" />
        <Widget type="balance" />
      </div>
      <div className="charts flex flex-wrap items-center justify-center  gap-4 p-3">
        <Featured />
        <Chart />
      </div>
      <div className="flex gap-5 flex-wrap listContainer p-5 m-5 shadow-lg">
        <div className="w-11/12 items-center justify-center overflow-auto rounded-lg shadow">
          <div className="listTitle font-medium text-gray-400 mb-4">
            Latest Transactions
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
