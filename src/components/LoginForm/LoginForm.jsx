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
          username: username.toLowerCase(),
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="md:shadow-lg shadow-zinc-300 text-center md:mt-[100px] mt-[10%] rounded-md p-4 md:w-[70%] w-screen md:h-[200px] mb-5 h-[280px] ml-auto mr-auto" onSubmit={login}>
      <h2 className=''>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div className='w-full flex justify-center'>
        <label htmlFor="username">
          <input
            placeholder='Username'
            className='mb-2 ml-2 p-1 rounded-md border-2 border-zinc-200'
            type="text"
            name="username"
            required
            autoFocus={true}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div className='w-full flex justify-center'>
        <label htmlFor="password">
          <input
            placeholder='Password'
            className='ml-2 p-1 rounded-md border-2 border-zinc-200'
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
