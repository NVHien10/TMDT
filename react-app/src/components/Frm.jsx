import left from "../image/frm/frm1/left.png";
import reTrai from "../image/frm/frm2/VectorLeft.png";
import rePhai from "../image/frm/frm2/VectorRight.png";
import iphone from "../image/frm/frm2/Iphone.png";
import FlashSale from "../components/FlashSales.jsx";
import Trending from "../components/Trending.jsx";
//import Topp100 from "../components/Topp100.jsx";
import Adv from "./Adv.jsx";
import Adv2 from "./Adv2.jsx";
import PropTypes from "prop-types";
import TopTram from "./TopTram.jsx";
import React from 'react';

const Frm = ({ showMenu }) => {
  
  return (
    <div className="mt-0 flex w-full flex-col mdd:mt-12 lgg:mt-0">
      <div className="hidden w-full mdd:flex lgg:flex">
        <div className="block mdd:w-[495px] lgg:w-[547px]">
          <img src={left} alt="left" />
        </div>

        <div className="relative bg-[#558bff] mdd:w-[496px] lgg:w-[893px]">
          <div className="absolute -left-[12%] top-1/3 hidden h-[163px] w-[228px] text-center lgg:block">
            <div className="h-[123px] w-full bg-white px-[30px] py-[36px]">
              <div className="font-lato text-[20px] font-bold">
                Summer Essentials
              </div>
              <div className="font-lato text-[20px] font-bold text-red-600">
                20% off
              </div>
            </div>
            <div className="h-[40px] w-full bg-black px-[75px] py-[10px] text-center font-lato text-[14px] text-white">
              19 Jul-30 Jul
            </div>
          </div>

          <div className="font-lato text-[32px] font-bold uppercase text-white md:top-[10%] md:text-center mdd:mt-[70px] mdd:px-[90px] lg:right-[14%] lg:top-1/4 lgg:mt-[120px]">
            kimonos, caftans & pareos
          </div>
          <div className="font-lato text-[28px] font-medium text-white md:top-[45%] md:px-[30px] md:text-center mdd:px-[90px] mdd:py-[32px] lg:right-[15%] lg:top-[40%] lgg:my-[32px]">
            Poolside glam included From $4.99
          </div>
          <div className="text-center">
            <button className="rounded bg-[#4172DC] px-14 py-2 font-lato text-[14px] text-white hover:bg-blue-700">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <div className="order- order-3 mdd:order-1 lgg:order-1">
        {showMenu ? (
          <div className="hidden"></div>
        ) : (
          <>
            <FlashSale />
            <Trending />
            <TopTram/>
         
          </>
        )}
      </div>

      <div className="order-1 mdd:order-2 lgg:order-2">
        {showMenu ? <div className="hidden"></div> : <Adv />}
      </div>
      <div className="5 mt-16 hidden h-fit items-center justify-between bg-[#F7DDD0] mdd:order-3 mdd:flex mdd:h-[221px] mdd:w-[991px] lgg:order-3 lgg:flex lgg:h-[221px] lgg:w-[1440px]">
        <div className="pl-[90px]">
          <img src={reTrai} alt="reTrai" />
        </div>

        <div className="h-fit w-fit mdd:mx-[70px] mdd:h-[122px] mdd:w-[268.5px] lgg:h-[94px] lgg:w-[493px]">
          <div className="font-lato text-[24px] font-bold uppercase text-[#465D6B]">
            MagSafe
          </div>
          <div className="font-lato text-[20px] text-[#555555]">
            Snap on a magnetic case, wallet, or both. And get faster wireless
            charging.
          </div>
        </div>
        <div className="h-fit w-fit mdd:w-[268.5px] lgg:h-fit lgg:w-fit">
          <img src={iphone} alt="iphone" />
        </div>

        <div className="pr-[90px] mdd:pl-[70px]">
          <img src={rePhai} alt="rePhai" />
        </div>
      </div>

      <div className="order-2 mdd:order-4 lgg:order-4">
        {showMenu ? <div className="hidden"></div> : <Adv2 />}
      </div>
    </div>
  );
};
Frm.propTypes = {
  showMenu: PropTypes.bool.isRequired, // xác định kiểu bool a và bắt buộc
};
export default Frm;
