import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";

function LoginPage() {
  const history = useHistory();

  return (
    <div className=''>
      <div className='ml-auto mr-auto md:w-[50%] md:mt-[15%] mt-[10%]'>
      <LoginForm />
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
