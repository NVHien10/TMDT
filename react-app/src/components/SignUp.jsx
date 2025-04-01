import Horizontal from "../image/frm/frm2/Horizontal.png";
import dausao from "../image/Login/dausao.png";
import tron from "../image/Login/tron.png";
import iconshow from "../image/Login/iconshow.png";
import logoGG from "../image/Login/logoGG.png";
import PropTypes from "prop-types";
import React from 'react';

import { useState } from "react";
import { fetchAddUser } from "../services/api";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [errFullName, setErrFullName] = useState("Name cannot be empty");

  const [password, setPassword] = useState("");
  const [errPassword, setErrPassword] = useState("Password cannot be empty");

  const [email, setEmail] = useState("");
  const [errEmail, setErrEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await fetchAddUser(fullName, email, password);
      console.log("User created: ", result);
      alert(fullName + "🎉 Registration successful!");
      console.log("SUBMIT:", fullName, email, password);
    } catch (error) {
      alert(" Failed to create user");
      throw error;
    }
  };

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handEmail = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (email && !validateEmail(value)) {
      setErrEmail("Wrong email address");
    } else {
      setErrEmail("");
    }
  };

  const handBlur = () => {
    if (!fullName.trim()) setErrFullName("Name cannot be empty");
    else setErrFullName("");
  };

  const handBlurPassword = () => {
    if (!password.trim()) setErrPassword("Name cannot be empty");
    else setErrPassword("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="signup block w-[478px] mdd:block mdd:w-[398px] lgg:block lgg:h-fit lgg:w-[606px]"
      >
        <div className="font-lato text-[20px] font-semibold">Sign up</div>
        <div className="mt-9 flex">
          <div>Name</div>
          <div>
            <img src={dausao} alt={dausao} />
          </div>
        </div>
        <div
          className={`mr-5 flex items-center justify-between rounded-md border-2 ${!fullName.trim() ? "border-orange-400" : ""} mdd:mr-0 lgg:mr-0`}
        >
          <div className="m-[10px] w-3/4">
            <input
              className="w-full"
              type="text"
              placeholder="Full name"
              onChange={(e) => setFullName(e.target.value)}
              onBlur={handBlur}
            />
          </div>

          <div>
            <img className="pr-[10px]" src={tron} alt={tron} />
          </div>
        </div>
        <span className="font-lato text-[12px] text-[#FF2E00]">
          {errFullName}
        </span>

        <div className="mt-7 flex">
          <div>Email</div>
          <div>
            <img src={dausao} alt={dausao} />
          </div>
        </div>
        <div
          className={`mr-5 flex items-center justify-between rounded-md border-2 mdd:mr-0 lgg:mr-0 ${!email.trim() ? "border-orange-400" : ""} `}
        >
          <div className="m-[10px] w-3/4">
            <input
              onChange={handEmail}
              value={email}
              type="text"
              placeholder="Email address"
              className="w-full"
            />
          </div>
          <div>
            <img className="pr-[10px]" src={tron} alt={tron} />
          </div>
        </div>
        <span className="font-lato text-[12px] text-[#FF2E00]">{errEmail}</span>

        <div className="mt-7 flex">
          <div>Password</div>
          <div>
            <img src={dausao} alt={dausao} />
          </div>
        </div>
        <div
          className={`mr-5 flex items-center justify-between rounded-md border-2 ${!password.trim() ? "border-orange-400" : ""} mdd:mr-0 lgg:mr-0`}
        >
          <div className="m-[10px] w-3/4">
            <input
              type="text"
              placeholder="password"
              className="w-full"
              onBlur={handBlurPassword}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <img className="pr-[10px]" src={iconshow} alt={iconshow} />
          </div>
        </div>
        <span className="font-lato text-[12px] text-[#FF2E00]">
          {errPassword}
        </span>

        <div className="mt-7 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <input type="checkbox" className="h-5 w-5" />

            <div className="font-lato text-[12px] text-[#262626]">
              Terms and conditions agreement should start with an introduction
              that lets users know they’re reading a terms and conditions
              agreement
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-7 flex rounded-md bg-[#C4C4C4] px-[203px] py-[18px] font-lato text-[14px] uppercase text-white mdd:px-[171px] lgg:px-[275px]"
        >
          sign up
        </button>

        <div className="mt-3 flex h-5 items-center justify-between">
          <img
            className="w-[191.5px] mdd:w-[171.5px] lgg:w-[275.5px]"
            src={Horizontal}
            alt={Horizontal}
          />
          <div className="font-lato text-[14px] font-medium uppercase text-[#9D9D9D]">
            or
          </div>
          <img
            className="w-[191.5px] mdd:w-[171.5px] lgg:w-[275.5px]"
            src={Horizontal}
            alt={Horizontal}
          />
        </div>

        <button className="mt-4 flex rounded-md bg-[#434343] px-[164px] py-[18px] font-lato text-[14px] text-white mdd:px-[131px] lgg:px-[235px]">
          <img className="mr-1" src={logoGG} alt={logoGG} />
          Sign up by google
        </button>
      </form>
    </div>
  );
};
SignUp.propTypes = {
  toggoSignUp: PropTypes.func.isRequired, // Xác định toggoSignUp phải là function và bắt buộc
};
export default SignUp;
