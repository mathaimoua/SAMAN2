import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';
import Footer from '../Footer/Footer';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className='md:flex'>
      <div className='md:h-screen h-[50%] md:w-[50%] bg-zinc-500 text-black md:pt-[70px]'>
        <div className='px-[10%] pt-[20%] pb-[10%] text-white text-2xl font-thin'>
        SAMAN!
        </div>
      </div>
      <div className='md:w-[50%]'>
      <LoginForm />
      <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
