import React from "react";
import { useHistory } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";
import organizePic from "../../assets/organizeItems.jpeg";

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <div className="md:flex">
        <div className="md:h-[90%] h-[50%] md:w-[50%] text-black md:pt-[70px]">
          <div className="md:text-4xl md:text-center md:pt-[30%] px-[10%] pt-[20%] pb-[10%] text-2xl font-thin text-center">
            You're one step away from organization!
            {/* <img src={organizePic} className='visible'/> */}
          </div>
        </div>
        <div className="md:w-[50%] pt-[10%] md:h-screen">
          <div className='w-[70%] ml-auto mr-auto md:mt-[15%]'>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
