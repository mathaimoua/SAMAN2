import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";
import samanPic from "../../assets/SAMANLogo.png";

function LoginPage() {
  const history = useHistory();

  return (
    <div className=''>
      <div className='relative z-0 h-0 top-[40] w-[70%] ml-auto mr-auto md:pt-0 pt-20 pb-20'>
        <img src={samanPic} />
      </div>
      <div className='relative z-10 ml-auto mr-auto md:w-[50%] md:mt-[20%] mt-[10%]'>
      <LoginForm />
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
