import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: "LOGIN",
        payload: {
          username: username.toLowerCase(),
          password: password,
        },
      });
    } else {
      dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end login

  return (
    <div>
      <form
        className="md:shadow-lg text-center shadow-zinc-300 rounded-md p-4 md:w-[70%] w-screen pb-5 ml-auto mr-auto bg-white"
        onSubmit={login}
      >
        {/* <h2 className=''>Login</h2> */}
        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            <p className='text-xs text-red-500 pb-3'>*{errors.loginMessage}</p>
          </h3>
        )}
        <div className="w-full flex justify-center">
         
          <label htmlFor="username">
          <h2 className='text-center m-2 text-xl font-thin'>Login</h2>
            <input
              placeholder="Username"
              className="w-[100%] mb-2 ml-2 p-2 rounded-md border-2 border-zinc-200"
              type="text"
              name="username"
              required
              autoFocus={true}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
        </div>
        <div className="w-full flex justify-center">
          <label htmlFor="password">
            <input
              placeholder="Password"
              className="w-[100%] ml-2 p-2 rounded-md border-2 border-zinc-200"
              type="password"
              name="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <p
          onClick={() => {
            history.push("/registration");
          }}
          className="hover:underline text-[#FA8072] hover:cursor-pointer hover:text-zinc-300 pt-3 pb-3"
        >
          Don't have an account? Sign up!
        </p>
        <div>
          <button className="py-2 px-5 my-2 transition duration:400 hover:bg-[#dd7266]">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
