import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// CUSTOM COMPONENTS
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";
import Footer from "../Footer/Footer";

function LandingPage() {
  const [heading, setHeading] = useState("Welcome");
  const history = useHistory();

  const onLogin = (event) => {
    history.push("/login");
  };

  return (
    <div className="md:flex">
      <div className="md:h-screen h-[50%] md:w-[50%] bg-zinc-300 text-black md:pt-[70px]">
        <div className="px-[10%] pt-[20%] pb-[10%] text-2xl font-thin">
          Simple Asset Management (SAMAN) is exactly what the name suggests,
          easy organizing of your belongings. SAMAN makes it easy for any
          organization or individual to get organized and help reduce
          unnecessary losses. Unlike other asset management software, SAMAN does
          NOT cost an arm and a leg, in fact, it's free!
        </div>
      </div>
      <div className="md:w-[50%] md:mt-[15%] mt-[10%] ">
        <LoginForm />
      </div>
    </div>
  );
}

export default LandingPage;
