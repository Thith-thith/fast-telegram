import React  from 'react';
import {Helmet} from 'react-helmet';
import {Link} from "react-router-dom";
import {GiMissileLauncher} from "react-icons/gi";


const TITLE ="Fast telegram";

const Login = () => {
    return ( 
        <React.Fragment>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <div className="flex  items-center justify-center h-screen">
                <div className="w-full max-w-md">
                    <form className="blur bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4 h-full">
                        <div className="flex justify-center">
                            <h1 className="text-gray-900 font-medium flex text-3xl  items-center justify-center mb-10">
                                Login
                            </h1>
                            <div className="text-4xl ml-2">
                                <GiMissileLauncher/>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="Email" type="email" placeholder="example@gmail.com"/>
                        </div>
                        <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold  mb-2">
                            Password
                        </label>
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="Password" type="password" placeholder="******************"/>
                            <p className="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>                      
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Sign In
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/#">
                                Forgot Password?
                            </a>
                        </div>
                        <p className="text-center text-gray-600 my-6">
                            Don't have an account yet?
                        </p>
                        <Link to="/register">
                            <button className=" mb-6 w-full border text-blue-700 hover:bg-gray-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Create new account
                            </button>
                        </Link>
                        <p className="text-center text-gray-600 ">Terms and conditions</p>  
                    </form>
                </div>
                {/* <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Koompi. All rights reserved.
                </p> */}
            </div>
        </React.Fragment>
     );
}
 
export default Login;






