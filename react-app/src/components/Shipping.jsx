import iconMuiTem from "../image/header/Arrow.png";
import Horizontal from "../image/frm/frm2/Horizontal.png";
import imgAus from "../image/frm/ProductDetails/imgAus.png";
import imgRace from "../image/frm/ProductDetails/imgRace.png";
import imfCago from "../image/frm/ProductDetails/imfCago.png";
import paypal from "../image/frm/ProductDetails/paypal.png";
import master from "../image/frm/ProductDetails/master.png";
import bitcoin from "../image/frm/ProductDetails/bitcoin.png";
import React from 'react';

const Ship = [
  {
    id: 1,
    img: imgAus,
    shipCost: 0,
    deliveryTime: "14-21 days",
    state: "Unavailable",
  },
  {
    id: 2,
    img: imgRace,
    shipCost: 15,
    deliveryTime: "7-14 days",
    state: "Unavailable",
  },
  {
    id: 3,
    img: imfCago,
    shipCost: 21,
    deliveryTime: "3-7 days",
    state: "Unavailable",
  },
];
const Shipping = () => {
  return (
    <div>
      <div className="mx-5 mt-6 mdd:mx-[90px] lgg:mx-[90px]">
        <div>
          <div className="mt-3 font-lato text-[14px] font-bold">Shipping</div>
          <div className="mt-3 font-lato text-[14px] text-[#555555]">
            Calculate the shipping cost by region
          </div>
        </div>

        <div className="mt-6 flex items-center">
          <div className="mt-3 font-lato text-[14px] text-[#555555]">
            Shipping to
          </div>
          <div className="ml-6 flex h-[44px] w-[289px] items-center justify-between rounded-md border-2">
            <div className="ml-[10px] font-lato text-[14px] text-[#555555]">
              Sydney
            </div>
            <img className="mr-[10px]" src={iconMuiTem} alt="iconMuiTem" />
          </div>
        </div>

        <div className="ml-0 mt-8 flex w-[438px] items-center justify-between mdd:ml-0 mdd:w-[757px] lgg:ml-[251px] lgg:w-[757px]">
          <div>Shipping Company</div>
          <div>Shipping Cost</div>
          <div>Estimated Delivery Time</div>
          <div>Packet Insurance</div>
        </div>

        <div className="lgg:mt-7 mdd:mt-7 mt-3 ">
          <img className="h-[0.5px] w-full" src={Horizontal} alt="Horizontal" />
        </div>

        <div className="ml-0 mt-3 w-[438px] mdd:ml-0 mdd:mt-7 mdd:w-[757px] lgg:ml-[251px] lgg:mt-7 lgg:w-[757px]">
          {Ship.map((data) => (
            <div key={data.id} className="flex items-center justify-between">
              <div>
                <img src={data.img} alt={data.img} />
              </div>
              <div className="w-[165px] font-lato text-[14px] text-[#262626]">
                {data.shipCost}
              </div>
              <div className="my-[28.5px] w-[165px] font-lato text-[14px] text-[#262626]">
                {data.deliveryTime}
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-1 h-5 w-5" />

                <div className="font-lato text-[14px] text-[#262626]">
                  {data.state}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-11 font-lato text-[16px] font-extrabold">
          Payment
        </div>
        <div className="mt-3 font-lato text-[14px] text-[#555555]">
          Payment methods supported with our platform
        </div>
        <div className="mb-10 mt-8 flex">
          <img src={paypal} alt="paypal" />
          <img className="mx-10" src={master} alt="master" />
          <img src={bitcoin} alt="bitcoin" />
        </div>
      </div>
    </div>
  );
};

export default Shipping;
