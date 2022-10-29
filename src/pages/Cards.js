import React from "react";
import {
  cardimage1,
  cardimage2,
  cardimage3,
  Image,
  kitchenImage,
} from "../data/dummy";

const Cards = () => {
  return (
    <div className="p-3 mt-14">
      <div className="title p-2 ml-2 items-center text-gray-400 text-xl font-medium">
        UI Elements/{" "}
        <span className="font-bold text-xl text-gray-500">Cards Basics</span>{" "}
      </div>
      <div className="wrapper p-5 flex flex-wrap flex-row mt-4 items-center justify-between">
        {/* card 1 */}
        <div className=" shadow-xl w-card h-card rounded-md">
          <div className="headings p-5">
            <h1 className="text-lg text-gray-600 font-bold ">Card Title</h1>
            <h3 className="text-gray-400 text-sm font-semibold mt-1 mb-2">
              support card title
            </h3>
          </div>
          <img
            className="rounded-md w-full h-card-image"
            src={cardimage1}
            alt="shoe"
          />
          <div className="downcontents p-5">
            <p className="details text-sm text-gray-400 font-semibold">
              Red Nike shoes for sports and casual wear also.
            </p>
            <div className="flex flex-row gap-5 mt-3 items-center justify-start">
              <button className="text-blue-500 hover:text-blue-700 font-medium">
                card link
              </button>
              <button className="text-blue-500 hover:text-blue-700 font-medium">
                another link
              </button>
            </div>
          </div>
        </div>
        {/* card1 ends */}

        {/* card2 starts */}
        <div className=" shadow-xl w-card h-card rounded-md">
          <div className="headings p-5">
            <h1 className="text-lg text-gray-600 font-bold ">Card Title</h1>
            <h3 className="text-gray-400 text-sm font-semibold mt-1 mb-2">
              support card title
            </h3>
          </div>
          <img
            className="rounded-md w-full h-card-image"
            src={cardimage2}
            alt="shoe"
          />
          <div className="downcontents p-5">
            <p className="details text-sm text-gray-400 font-semibold">
              Red Nike shoes for sports and casual wear also.
            </p>
            <div className="flex flex-row gap-5 mt-3 items-center justify-start">
              <button className="text-blue-500 hover:text-blue-700 font-medium">
                card link
              </button>
              <button className="text-blue-500 hover:text-blue-700 font-medium">
                another link
              </button>
            </div>
          </div>
        </div>

        {/* card2 ends */}

        {/* card3 starts */}
        <div className=" shadow-xl w-card h-card rounded-md">
          <div className="headings p-5">
            <h1 className="text-lg text-gray-600 font-bold ">Card Title</h1>
            <h3 className="text-gray-400 text-sm font-semibold mt-1 mb-2">
              support card title
            </h3>
          </div>
          <img
            className="rounded-md w-full h-card-image"
            src={cardimage3}
            alt="shoe"
          />
          <div className="downcontents p-5">
            <p className="details text-sm text-gray-400 font-semibold">
              Red Nike shoes for sports and casual wear also.
            </p>
            <div className="flex flex-row gap-5 mt-3 items-center justify-start">
              <button className="text-blue-500 hover:text-blue-700 font-medium">
                card link
              </button>
              <button className="text-blue-500 hover:text-blue-700 font-medium">
                another link
              </button>
            </div>
          </div>
        </div>
        {/* card3 ends */}
      </div>

      {/* Another section starts here */}

      <h1 className="text-gray-500 text-lg p-5 font-bold">Content Types</h1>
      <div className="p-5 flex flex-wrap flex-row mt-4 items-start justify-between">
        <div className="w-card h-fit rounded-md mb-5">
          <h2 className="text-gray-400 font-bold text-sm m-2 ">Body</h2>
          <div className="p-4 shadow-xl bg-white mb-5 rounded-md">
            <div className="text-sm text-gray-500 font-medium leading-6 p-2">
              This is some text within a card body. Jelly lemon drops tiramisu
              chocolate cake cotton candy soufflé oat cake sweet roll. Sugar
              plum marzipan dragée topping cheesecake chocolate bar. Danish
              muffin icing donut.
            </div>
          </div>
          <h2 className="text-gray-400 font-bold text-sm m-2">
            Titles,text and links
          </h2>
          <div className="p-3 shadow-xl bg-white rounded-md mb-5">
            <h3 className="font-bold text-base text-gray-500 mb-2">
              Card title
            </h3>
            <h4 className="font-medium text-sm text-gray-400 mb-4">
              card subtitle
            </h4>
            <div className="font-medium text-sm text-gray-500 mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </div>
            <span className="text-sm text-blue-500 cursor-pointer hover:text-blue-600 font-bold">
              Card Link
            </span>
            <span className="text-sm text-blue-500 font-bold ml-5 cursor-pointer hover:text-blue-600">
              Another Link
            </span>
          </div>

          <h2 className="text-gray-400 font-bold text-sm m-2 mb-4">
            List groups
          </h2>

          <ul className="rounded-md text-sm font-medium text-gray-500 bg-white shadow-xl">
            <li className="p-2 rounded-md pl-5 border-b-1 ">Cras justo odio</li>
            <li className="p-2 rounded-md pl-5 border-b-1 ">
              Dapibus ac facilisis in
            </li>
            <li className="p-2 rounded-md pl-5 border-b-1 ">Morbi leo risus</li>
          </ul>
        </div>

        <div className="shadow-xl w-card h-fit rounded-md mb-3">
          <h2 className="text-gray-400 font-bold text-sm mx-2 mb-3 ">Images</h2>
          <div className="bg-white shadow-md rounded-md flex flex-col items-center justify-center">
            <img
              className="rounded-md w-full h-card-image mb-5"
              src={Image}
              alt="flower"
            />
            <div className="text-left text-gray-400 font-medium text-sm m-5">
              Some quick example text to build on the card title and make up the
              bulk of the card's content
            </div>
            <h3 className="text-left text-gray-400 font-medium text-sm m-5">
              Cookie topping caramels jujubes gingerbread. Lollipop apple pie
              cupcake candy canes cookie ice cream. Wafer chocolate bar carrot
              cake jelly-o.
            </h3>
          </div>
        </div>
        <div className="3 w-card h-fit rounded-md shadow-xl">
          <h3 className="text-gray-400 font-bold text-sm m-2">Kitchen sink</h3>
          <div className="bg-white shadow-md rounded-md">
            <img
              className="rounded-md w-full h-card-image"
              src={kitchenImage}
              alt="noodles"
            />
            <div className="p-5">
              <h3 className="font-bold text-base text-gray-500 mb-5 p-2">
                Card title
              </h3>
              <div className="text-left text-gray-400 font-medium text-sm p-2 m-1">
                Some quick example text to build on the card title and make up
                the bulk of the card's content
              </div>
              <div className="p-2 m-1">
                <span className="text-sm text-blue-500 font-bold cursor-pointer">
                  Card Link
                </span>
                <span className="text-sm text-blue-500 font-bold cursor-pointer ml-5">
                  Another Link
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
