import React from "react";
import { BsCurrencyDollar, BsShield } from "react-icons/bs";
import avatar from "./avatar.jpg";
import avatar2 from "./avatar2.jpg";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.jpg";
import product2 from "./product2.jpg";
import product4 from "./product4.jpg";
import product6 from "./product6.jpg";
import product8 from "./product8.jpg";
import layoutimage from "./layout.png";
import error from "./erro404.png";
import image1 from "./5.jpg";
import image2 from "./7.jpg";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import PersonPinRoundedIcon from "@mui/icons-material/PersonPinRounded";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import StyleIcon from "@mui/icons-material/Style";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const profile_pic = avatar;
export const layout_image = layoutimage;
export const errorimage = error;
export const cardimage1 = product4;
export const cardimage2 = product8;
export const cardimage3 = product2;
export const Image = image1;
export const kitchenImage = image2;

export const data = [
  {
    name: "January",
    Total: 1200,
  },
  {
    name: "February",
    Total: 2100,
  },
  {
    name: "March",
    Total: 900,
  },
  {
    name: "April",
    Total: 1600,
  },
  {
    name: "May",
    Total: 900,
  },
  {
    name: "June",
    Total: 2100,
  },
];

export const rows = [
  {
    id: 1,
    name: "John Doe",
    country: "USA",
    image: avatar,
    status: "active",
    statusBg: "#00e676",
  },
  {
    id: 2,
    name: "Satya sai",
    country: "IND",
    image: avatar2,
    status: "active",
    statusBg: "#00e676",
  },
  {
    id: 3,
    name: "Tejaswi",
    country: "INd",
    image: avatar3,
    status: "active",
    statusBg: "#00e676",
  },
  {
    id: 4,
    name: "Shravani",
    country: "RUS",
    image: avatar4,
    status: "active",
    statusBg: "#00e676",
  },
  {
    id: 5,
    name: "Queeny",
    country: "UK",
    image: product6,
    status: "active",
    statusBg: "#00e676",
  },
];

export const types = {
  users: {
    title: "USERS",
    isMoney: false,
    link: "see all users",
    icon: (
      <PersonOutlineOutlinedIcon className=" text-red-500 p-1 bg-red-200 rounded-md" />
    ),
  },
  earnings: {
    title: "EARNINGS",
    isMoney: true,
    amount: "$1,000",
    link: "View net earnings",
    icon: (
      <MonetizationOnOutlinedIcon className="text-yellow-600 bg-yellow-200 rounded-md p-1" />
    ),
  },
  balance: {
    title: "BALANCE",
    isMoney: true,
    amount: "$1,000",
    link: "View balance",
    icon: (
      <AccountBalanceWalletOutlinedIcon className="text-violet-600 bg-violet-200 rounded-md p-1" />
    ),
  },
  orders: {
    title: "ORDERS",
    isMoney: false,
    link: "View all orders",
    icon: (
      <ShoppingCartOutlinedIcon className="text-green-600 bg-green-200 rounded-md p-1" />
    ),
  },
};

export const links = [
  {
    title: "Basic",
    links: [
      {
        name: "Dashboard",
        icon: <HomeRoundedIcon />,
      },
      {
        name: "Layouts",
        icon: <ViewQuiltRoundedIcon />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "AccountsandSettings",
        icon: <PersonPinRoundedIcon />,
      },
      {
        name: "Authentications",
        icon: <LockOpenRoundedIcon />,
      },
      {
        name: "Misc",
        icon: <ViewInArIcon />,
      },
    ],
  },
  {
    title: "Components",
    links: [
      {
        name: "cards",
        icon: <StyleIcon />,
      },
      {
        name: "UserInterface",
        icon: <WebAssetIcon />,
      },
    ],
  },
];

export const chatData = [
  {
    image: avatar2,
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: avatar4,
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    image: avatar,
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsShield />,
    title: "My DashBoard",
    desc: "Information & data",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
];

export const Alert_Interfaces = [
  {
    id: 0,
    content: "This is a primary alert — check it out!",
    color: "text-blue-500",
    bgcolor: "bg-blue-100",
  },
  {
    id: 1,
    content: "This is a secondary alert — check it out!",
    color: "text-gray-500",
    bgcolor: "bg-gray-100",
  },
  {
    id: 2,
    content: "This is a success alert — check it out!",
    color: "text-green-500",
    bgcolor: "bg-green-100",
  },
  {
    id: 3,
    content: "This is a warning alert — check it out!",
    color: "text-yellow-500",
    bgcolor: "bg-yellow-100",
  },
  {
    id: 4,
    content: "This is an error alert — check it out!",
    color: "text-red-500",
    bgcolor: "bg-red-100",
  },
  {
    id: 5,
    content: "This is a info alert — check it out!",
    color: "text-blue-500",
    bgcolor: "bg-blue-100",
  },
  {
    id: 6,
    content: "This is a dark alert — check it out!",
    color: "text-gray-500",
    bgcolor: "bg-gray-100",
  },
];

export const Dismissable_Interfaces = [
  {
    id: 0,
    content: "This is a primary dismissable alert — check it out!",
    color: "text-blue-500",
    bgcolor: "bg-blue-100",
  },
  {
    id: 1,
    content: "This is a secondary dismissable alert — check it out!",
    color: "text-gray-500",
    bgcolor: "bg-gray-100",
  },
  {
    id: 2,
    content: "This is a success dismissable alert — check it out!",
    color: "text-green-500",
    bgcolor: "bg-green-100",
  },
  {
    id: 3,
    content: "This is a warning dismissable alert — check it out!",
    color: "text-yellow-500",
    bgcolor: "bg-yellow-100",
  },
  {
    id: 4,
    content: "This is an error dismissable alert — check it out!",
    color: "text-red-500",
    bgcolor: "bg-red-100",
  },
  {
    id: 5,
    content: "This is a info dismissable alert — check it out!",
    color: "text-blue-500",
    bgcolor: "bg-blue-100",
  },
  {
    id: 6,
    content: "This is a dark dismissable alert — check it out!",
    color: "text-gray-500",
    bgcolor: "bg-gray-100",
  },
];
