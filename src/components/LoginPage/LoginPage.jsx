import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";
import samanPic from "../../assets/SAMANLogo.png";

function LoginPage() {
  const history = useHistory();

  return (
    <div className=''>
      <div className='relative z-0 h-0 md:top-[20px] w-[70%] ml-auto mr-auto md:pt-0 pt-20 md:pb-20'>
        <img src={samanPic} />
      </div>
      <div className='relative z-10 ml-auto mr-auto md:w-[50%] md:mt-[20%] mt-[30%]'>
      <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
