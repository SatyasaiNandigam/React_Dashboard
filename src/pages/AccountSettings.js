import React from "react";
import { profile_pic } from "../data/dummy";
import { UserAuth } from "../contexts/AuthContext";

const AccountSettings = () => {
  const {user} = UserAuth();
  return (
    <div className="flex-wrap">
      <div className="  py-3 container mx-auto grow p-5">
        <h4 className="font-bold text-xl py-3 mb-4  text-gray-600">
          <span className="text-gray-500">Account Settings /</span> Account
        </h4>
        <div className="wrapdetails  p-5 bg-white shadow-lg rounded-md">
          <div className="profile">
            <span className="text-gray-500 font-bold text-lg">
              Profile Detials
            </span>
          </div>
          <div className="body-wrap mb-5 ">
            <div className="inner-wrap flex flex-row ">
              <img
                src={user?.photoURL ? user?.photoURL : profile_pic}
                alt=""
                className="h-28 w-28 rounded-md mt-5 mr-5"
              />
              <div className="mt-6 flex-wrap">
                <button className="bg-violet-400 hover:bg-violet-700 text-white text-sm font-light sm:text-xs md:text-xs mr-5 mb-3 py-2 px-4 rounded">
                  Upload New Photo
                </button>
                <button className="bg-transparent hover:bg-gray-500 text-gray-500 text-sm font-light hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                  Reset
                </button>
                <p className="mt-7 text-gray-400 font-light">
                  Allowed JPG,GIF OR PNG. Max size of 800K
                </p>
              </div>
            </div>
          </div>
          <hr />

          {/* Form elements */}

          <div className="forms mt-5">
            <form className="w-full ">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-4">
                  <label
                    className="block uppercase tracking-wide text-gray-500 text-xs font-semibold mb-2"
                    htmlFor="grid-first-name"
                  >
                    FIRST NAME
                  </label>
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Satya"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-4">
                  <label
                    className="block uppercase tracking-wide text-gray-500 text-xs font-semibold mb-2"
                    htmlFor="grid-last-name"
                  >
                    LAST NAME
                  </label>
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Nandigam"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3  mb-6 md:mb-4">
                  <label
                    className="block uppercase tracking-wide text-gray-500 text-xs font-semibold mb-2"
                    htmlFor="grid-last-name"
                  >
                    EMAIL
                  </label>
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="email"
                    placeholder="satya@gmail.com"
                  />
                </div>

                <div className="w-full md:w-1/2 px-3  mb-6 md:mb-4">
                  <label
                    className="block uppercase tracking-wide text-gray-500 text-xs font-semibold mb-2"
                    htmlFor="grid-last-name"
                  >
                    ORGANIZATION
                  </label>
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Web Development"
                  />
                </div>

                <div className="w-full md:w-1/2 px-3  mb-6 md:mb-4">
                  <label
                    className="block uppercase tracking-wide text-gray-500 text-xs font-semibold mb-2"
                    htmlFor="grid-last-name"
                  >
                    PHONE NUMBER
                  </label>
                  <div className="flex">
                    <div className=" p-2 flex items-center justify-center  border-t border-l border-b border-blue-lighter rounded-l text-gray-700">
                      IN(+91)
                    </div>
                    <input
                      type="text"
                      placeholder="Mobile Number"
                      className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3  mb-6 md:mb-4">
                  <label
                    className="block uppercase tracking-wide text-gray-500 text-xs font-semibold mb-2"
                    htmlFor="grid-last-name"
                  >
                    ADRESS
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Address"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3  mb-6 md:mb-4">
                  <label
                    className="block uppercase tracking-wide text-gray-500 text-xs font-semibold mb-2"
                    htmlFor="grid-last-name"
                  >
                    STATE
                  </label>
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Andhra Pradesh"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3  mb-6 md:mb-4">
                  <label
                    className="block uppercase tracking-wide text-gray-500 text-xs font-semibold mb-2"
                    htmlFor="grid-last-name"
                  >
                    ZIP CODE
                  </label>
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="534001"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3  mb-6 md:mb-4">
                  <label
                    className="block uppercase tracking-wide text-gray-500 text-xs font-semibold mb-2"
                    htmlFor="country"
                  >
                    COUNTRY
                  </label>
                  <select
                    id="country"
                    className="w-full border-1 p-2 text-gray-400 border-gray-300 rounded-md hover:border-gray-400"
                  >
                    <option value="">Select</option>
                    <option value="Australia">Australia</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Canada">Canada</option>
                    <option value="China">China</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Japan">Japan</option>
                    <option value="Korea">Korea, Republic of</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Russia">Russian Federation</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                  </select>
                </div>

                <div className="w-full md:w-1/2 px-3  mb-6 md:mb-4">
                  <label
                    className="block uppercase tracking-wide text-gray-500 text-xs font-semibold mb-2"
                    htmlFor="language"
                  >
                    LANGUAGE
                  </label>
                  <select
                    id="language"
                    className="w-full border-1 p-2 text-gray-400 border-gray-300 rounded-md hover:border-gray-400"
                  >
                    <option value="">Select</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Malayalam">Malayalam</option>
                    <option value="Kannada">Kannada</option>
                    <option value="Japanese">Japanese</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="pt">Portuguese</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                  </select>
                </div>

                <div className="w-full md:w-1/2 px-3  mb-6 md:mb-4">
                  <label
                    className="block uppercase tracking-wide text-gray-500 text-xs font-semibold mb-2"
                    htmlFor="language"
                  >
                    TIME ZONE
                  </label>
                  <select
                    id="language"
                    className="w-full border-1 p-2 text-gray-400 border-gray-300 rounded-md hover:border-gray-400"
                  >
                    <option value="">Select Timezone</option>
                    <option value="-12">
                      (GMT-12:00) International Date Line West
                    </option>
                    <option value="-11">
                      (GMT-11:00) Midway Island, Samoa
                    </option>
                    <option value="-10">(GMT-10:00) Hawaii</option>
                    <option value="-9">(GMT-09:00) Alaska</option>
                    <option value="-8">
                      (GMT-08:00) Pacific Time (US & Canada)
                    </option>
                    <option value="-8">
                      (GMT-08:00) Tijuana, Baja California
                    </option>
                    <option value="-7">(GMT-07:00) Arizona</option>
                    <option value="-7">
                      (GMT-07:00) Chihuahua, La Paz, Mazatlan
                    </option>
                    <option value="-7">
                      (GMT-07:00) Mountain Time (US & Canada)
                    </option>
                    <option value="-6">(GMT-06:00) Central America</option>
                    <option value="-6">
                      (GMT-06:00) Central Time (US & Canada)
                    </option>
                    <option value="-6">
                      (GMT-06:00) Guadalajara, Mexico City, Monterrey
                    </option>
                    <option value="-6">(GMT-06:00) Saskatchewan</option>
                    <option value="-5">
                      (GMT-05:00) Bogota, Lima, Quito, Rio Branco
                    </option>
                    <option value="-5">
                      (GMT-05:00) Eastern Time (US & Canada)
                    </option>
                    <option value="-5">(GMT-05:00) Indiana (East)</option>
                    <option value="-4">
                      (GMT-04:00) Atlantic Time (Canada)
                    </option>
                    <option value="-4">(GMT-04:00) Caracas, La Paz</option>
                  </select>
                </div>

                <div className="w-full md:w-1/2 px-3  mb-6 md:mb-4">
                  <label
                    className="block uppercase tracking-wide text-gray-500 text-xs font-semibold mb-2"
                    htmlFor="language"
                  >
                    CURRENCY
                  </label>
                  <select
                    id="language"
                    className="w-full border-1 p-2 text-gray-400 border-gray-300 rounded-md hover:border-gray-400"
                  >
                    <option value="">Select Currency</option>
                    <option value="rup">INR</option>
                    <option value="usd">USD</option>
                    <option value="euro">Euro</option>
                    <option value="pound">Pound</option>
                    <option value="bitcoin">Bitcoin</option>
                  </select>
                </div>
              </div>
              <div>
                <button className="p-4 bg-violet-400 hover:bg-violet-700 text-white text-basefont-light mr-5 py-2 px-4 rounded">
                  save changes
                </button>
                <button className="bg-transparent hover:bg-gray-500 text-gray-500 text-sm font-light hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Delete Account Option */}
        <div className="deleteaccount mt-8 px-5 shadow-xl bg-white">
            <div className="heading items-center py-5">
              <span className="font-bold text-xl text-gray-500">Delete Account</span>
            </div>
            <div className="content pl-6">
              <div className="warning pl-3 rounded-md p-2
              
              bg-yellow-100">
                <p className="font-bold text-orange-400 mb-1">Are you sure you want to delete your account?</p>
                <p className=" text-orange-500 font-normal mb-1">
                  Once you delete your account there is not going back. Please
                  be certain.
                </p>
              </div>
              <div className="activity py-5">
                <div className="activityitem flex flex-row gap-1 items-center">
                  <div className="items-center text-lg"><input type="checkbox" /></div>
                  <span className="pr-3 text-gray-500">I confirm my account deactivation</span>
                </div>
                <div className="actoinbutton pt-2">
                  <button className=" bg-button-color border-button-border p-2 text-white font-medium text-sm rounded-md">Deactivate Account</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default AccountSettings;
