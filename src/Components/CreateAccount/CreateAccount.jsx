/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "./CreateAccount.css";
function CreateAccount() {
  return (
    <div>
      <div className="w-full max-w-xs">
        <form className="form-bg shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="text-center text-white mb-5">
            <h1 className=" text-lg mb-1"> Create an Account</h1>
            <p className=" text-sm place-col">
              Personal information/Contact Details
            </p>
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="username"
            >
              Name
            </label>
            <input
              className="shadow place-col appearance-none w-full py-4 pl-4 text-xs input-col leading-tight "
              id="username"
              type="text"
              placeholder="Enter the Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm  font-bold mb-2"
              htmlFor="reg"
            >
              Registration Number
            </label>
            <input
              className="shadow place-col appearance-none w-full py-4 pl-4 text-xs input-col leading-tight"
              id="reg"
              type="text"
              placeholder="Enter the Reg Number"
            />
          </div>
          {/* <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p> */}
          <div className="mb-4">
            <label
              className="block  text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              VIT Email ID
            </label>
            <input
              className="shadow place-col appearance-none w-full py-4 pl-4 text-xs input-col leading-tight"
              id="email"
              type="email"
              placeholder="Enter the VIT Email ID"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white  text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="shadow place-col appearance-none w-full py-4 pl-4 text-xs input-col leading-tight"
              id="phone"
              type="text"
              placeholder="Enter the Phone Number"
            />
          </div>
          <button
            className="w-full col text-white py-2 px-4 rounded"
            type="button"
          >
            Sign In
          </button>
          <div className="text-center">
            <p className=" text-sm mt-4 place-col">
              Already have an account?{" "}
              <a href="/" className="login-col">
                Log In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
