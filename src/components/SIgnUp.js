import React from "react";
import { Helmet } from "react-helmet";
import { GiMissileLauncher } from "react-icons/gi";

const TITTLE = "Register | Fast telegram";

const SignUP = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{TITTLE}</title>
      </Helmet>
      <form className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <div className="flex justify-center">
              <h1 className="text-gray-900 font-medium flex text-3xl  items-center justify-center mb-10">
                Register
              </h1>
              <div className="text-4xl ml-2">
                <GiMissileLauncher />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="block border-grey-light p-3 appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="fullname"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="block border-grey-light p-3 appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <input
                className="block border-grey-light p-3 appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline  "
                name="Phone"
                type="number"
                placeholder="Phone number"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="block border-grey-light p-3 appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="block border-grey-light p-3 appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="confirm_password"
                placeholder="Confirm Password"
              />
            </div>
            <button
              value="local"
              type="submit"
              className="mb-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create account
            </button>
            <div className="flex mt-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Send code with SMS</span>
              </label>
            </div>
            <div className="text-center mt-6">
              <span className="text-base text-gray-600">Terms & Condition</span>
            </div>
          </div>
          <div className="text-grey-dark my-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-blue-600"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SignUP;
