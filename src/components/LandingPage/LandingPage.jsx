import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// CUSTOM COMPONENTS
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";
import Footer from "../Footer/Footer";
import samanPic from "../../assets/SAMANLogo.png";

function LandingPage() {
  const [heading, setHeading] = useState("Welcome");
  const history = useHistory();

  const onLogin = (event) => {
    history.push("/login");
  };

  return (
    <div className="md:flex">
      <div className="flex-column md:h-screen h-[50%] md:w-[50%] bg-zinc-300 text-black md:pt-[70px]">
        <div className="px-[10%] top-0 pb-[10%] text-2xl font-thin z-10">
        <img
            src={samanPic}
            className="pt-[50px] md:pt-0 relative md:top-[50px] md:h-[200px] ml-auto mr-auto z-0"
          />
          <p className='relative md:top-0 z-10'>Simple Asset Management (SAMAN) is exactly what the name suggests,
          easy organizing of your belongings. SAMAN makes it easy for any
          organization or individual to get organized and help reduce
          unnecessary losses. Unlike other asset management software, SAMAN does
          NOT cost an arm and a leg, in fact, it's free!</p>
        </div>
      </div>
      <div className="md:w-[50%] md:pt-[20%] pt-[10px] ">
        <LoginForm />
      </div>
    </div>
  );
}

export default LandingPage;
