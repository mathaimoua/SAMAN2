import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";

function LoginPage() {
  const history = useHistory();

  return (
    <div className=''>
      <div className='md:w-[50%] w-:full m-0 mx-auto'>
      <LoginForm />
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
