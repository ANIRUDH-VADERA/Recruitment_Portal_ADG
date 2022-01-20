/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "./Bio.css";
function Bio() {
  return (
    <div>
      <div className="w-full max-w-xs">
        <form className="form-bg shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="text-center text-white mb-5">
            <h1 className=" text-lg mb-1"> Tell us about yourselft</h1>
            <p className=" text-sm place-col">
              Almost Done! Help us Know you Better
            </p>
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="Bio"
            >
              Bio
            </label>
            <textarea
              className="shadow place-col appearance-none w-full py-4 pl-4 text-xs input-col leading-tight "
              id="Bio"
              type="textfield"
              placeholder="Write something about yourself"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm  font-bold mb-2"
              htmlFor="git"
            >
              Github Profile(Optional)
            </label>
            <input
              className="shadow place-col appearance-none w-full py-4 pl-4 text-xs input-col leading-tight"
              id="git"
              type="text"
              placeholder="Enter your Github Profile"
            />
          </div>
          <div className="mb-4">
            <label
              className="block  text-white text-sm font-bold mb-2"
              htmlFor="portfolio"
            >
              Portfolio Link (Optional)
            </label>
            <input
              className="shadow place-col appearance-none w-full py-4 pl-4 text-xs input-col leading-tight"
              id="portfolio"
              type="text"
              placeholder="Enter your portfolio link"
            />
          </div>

          <button
            className="w-full col text-white py-2 px-4 rounded"
            type="button"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}

export default Bio;
