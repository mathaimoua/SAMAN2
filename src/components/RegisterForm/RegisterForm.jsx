import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: "REGISTER",
      payload: {
        username: username.toLowercase(),
        password: password,
      },
    });
  }; // end registerUser

  return (
    <div>
      <form
        className="md:shadow-lg text-center shadow-zinc-300 rounded-md p-4 md:w-[70%] w-screen mb-5 ml-auto mr-auto bg-white"
        onSubmit={registerUser}
      >
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            <p className='text-red-500 text-xs mb-3'>*{errors.registrationMessage}</p>
          </h3>
        )}
        <div className="w-full flex justify-center">
          <label htmlFor="username">
          <h2 className='text-center m-2 text-xl font-thin'>Register</h2>
            <input
              placeholder="Username"
              className="w-[100%] mb-2 ml-2 p-1 rounded-md border-2 border-zinc-200"
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
              className="w-[100%] mb-2 ml-2 p-1 rounded-md border-2 border-zinc-200"
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
          className="hover:underline text-[#FA8072] hover:cursor-pointer hover:text-zinc-300 mt-3 mb-3"
        >
          Already a member? Sign in!
        </p>
        <div>
          <button className="py-2 px-5 my-2 transition duration:400 hover:bg-[#dd7266]">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
