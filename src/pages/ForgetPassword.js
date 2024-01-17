import { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

function ForgetPassword() {
  const [email, setEmail] = useState("");

  function onChangeHandler(e) {
    setEmail(e.target.value);
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forget Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Signin"
            title="Signin"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              type="email"
              id="email"
              value={email}
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              placeholder="Email address"
              autoComplete="off"
              onChange={onChangeHandler}
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p>
                Don't Have an account?{" "}
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/sign-in"
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                >
                  Sign in instead?
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-300 ease-in-out hover:shadow-lg active:bg-blue-800"
            >
              Send Reset Email
            </button>
            <div className="my-4 before:border-t flex before:flex-1 items-center before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ForgetPassword;
