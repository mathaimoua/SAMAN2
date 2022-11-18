import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';

function LoginPage() {
  const history = useHistory();

  return (
    <div className='md:flex'>
      <div className='md:h-screen h-[50%] bg-gradient-to-r from-slate-400 to-black md:w-[50%] text-black md:pt-[70px]'>
        <div className='px-[10%] pt-[20%] pb-[10%] text-white text-2xl font-thin'>
        Simple Asset Management (SAMAN) is exactly what the name suggests, easy organizing of your belongings. SAMAN makes it easy for any organization or individual to get organized and help reduce unnecessary losses. Unlike other asset management software, SAMAN does NOT cost an arm and a leg, in fact, it's free!
        </div>
      </div>
      <div className='md:w-[50%]'>
      <LoginForm />
      <Footer />
      </div>
    </div>
  );
}

export default LoginPage;
