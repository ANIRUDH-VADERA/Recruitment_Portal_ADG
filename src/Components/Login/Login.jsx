/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "./Login.css";
function Login() {
  return (
    <div>
      <div className="w-full max-w-xs">
        <form className="form-bg shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="text-center text-white mb-5">
            <h1 className=" text-lg mb-1"> Login</h1>
            <p className=" text-sm place-col">
              Login with your VIT Registration Number
            </p>
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="reg"
            >
              Registration Number
            </label>
            <input
              className="shadow place-col appearance-none w-full py-4 pl-4 text-xs input-col leading-tight "
              id="reg"
              type="text"
              placeholder="Enter your Registration Number"
            />
          </div>
          <button
            className="w-full col text-white py-2 px-4 rounded"
            type="button"
          >
            Login with OTP
          </button>
          <div className="text-center">
            <p className=" text-sm mt-4 place-col">
              Dont have an account?
              <a href="/" className="login-col">
                Create One
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
