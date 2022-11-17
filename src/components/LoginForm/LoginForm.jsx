import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="text-center mt-[100px] rounded-md p-2 m-2 bg-slate-400 md:w-[40%] w-[80%] ml-auto mr-auto" onSubmit={login}>
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div className='w-full flex justify-center'>
        <label htmlFor="username">
          Username:
          <input
            className='mb-2 ml-2 p-1'
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div className='w-full flex justify-center'>
        <label htmlFor="password">
          Password:
          <input
            className='ml-2 p-1'
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <button className='py-2 px-5 my-2'>Log In</button>
      </div>
    </form>
  );
}

export default LoginForm;
