import Header from "./Header";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { useState } from "react";

import f2 from "../image/Login/f2.png";
import f3 from "../image/Login/f3.png";

import thanhdoc from "../image/Login/thanhdoc.png";

import Footer from "./Footer";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { Link } from "react-router-dom";

const Login = () => {
  const { cart } = useContext(CartContext);
  const [signUp, setSignUp] = useState(false);
  const toggoSignUp = () => {
    console.log("signUp");
    setSignUp(!signUp);
  };

  return (
    <div>
      <div>
        <Header cart={cart} />
      </div>

      <div className="mx-[90px] hidden items-center justify-end mdd:flex lgg:flex">
        <div className="flex items-center">
          <img src={f3} alt={f3} />
          <img src={f2} alt={f2} />
        </div>
        <Link to="/" className="ml-1">
          Back to the website
        </Link>
      </div>

      <div className="mt-8 mdd:mt-0 lgg:mt-0">
        <div className="mx-5 mt-0 flex justify-between mdd:mx-[90px] mdd:mt-11 lgg:mx-[90px] lgg:mt-11">
          <div className="block mdd:hidden lgg:hidden">
            {signUp ? (
              <SignUp toggoSignUp={toggoSignUp} />
            ) : (
              <SignIn toggoSignUp={toggoSignUp} />
            )}
          </div>
          <div className="hidden mdd:block lgg:block">
            <SignIn />
          </div>
          <div>
            <img
              className="hidden h-fit mdd:block lgg:block"
              src={thanhdoc}
              alt={thanhdoc}
            />
          </div>
          <div className="hidden mdd:block lgg:block">
            <SignUp />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
