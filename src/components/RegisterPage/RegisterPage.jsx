import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <div className="md:flex">
        <div className="md:h-[90%] h-[50%] md:w-[50%] text-black md:pt-[70px]">
          <div className="mt-[15%] px-[10%] pt-[20%] pb-[10%] text-2xl font-thin">
            You're one step away from organization!
          </div>
        </div>
        <div className="md:w-[50%] pt-[10%]">
        <div>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
