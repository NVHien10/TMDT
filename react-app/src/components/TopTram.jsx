import star from "../image/frm/frm2/Star 2.png";
import muiTenBag from "../image/frm/frm2/Vector175_bag.png";
import iconTim from "../image/frm/frm2/VectorTim.png";
import blackGirl from "../image/frm/frm2/photoCoGaiAoDen.png";
import aoxanh from "../image/frm/frm2/aoxanh.png";
import aoxanhrieu from "../image/frm/frm2/aoxanhrieu.png";
import aoden from "../image/frm/frm2/aoden.png";
import React from 'react';

const Top100 = [
  {
    id: 1,
    img: blackGirl,
    name: "Mango",
    description: "Kimono & Caftan - Black - Regular fit",
    vote: 289,
    cost: 228,
    maxCost: 290,
    discout: 10,
  },
  {
    id: 2,
    img: aoxanh,
    name: "Zara",
    description: "Midi top- Daily fit",
    vote: 523,
    cost: 95,
    maxCost: 145,
    discout: 7,
  },
  {
    id: 3,
    img: aoden,
    name: "Uniqlo",
    description: "Midi atlas Slim fit - bohemian",
    vote: 86,
    cost: 125,
    maxCost: 156,
    discout: 8,
  },
  {
    id: 4,
    img: aoxanhrieu,
    name: "Mango dress",
    description: "Kimono & Caftan - Colorful - Night club fit",
    vote: 121,
    cost: 365,
    maxCost: 487,
    discout: 15,
  },
];
const TopTram = () => {
  return (
    <div className="mt-[48px] h-fit w-fit mdd:mt-[68px] mdd:h-[1048px] mdd:w-[991px] lgg:mt-[68px] lgg:h-[548px] lgg:w-[1440px]">
      <div className="phan1 mx-[20px] mr-[20px] flex justify-between mdd:mx-[90px] lgg:mx-[90px] lgg:mb-[0px]">
        <div className="font-lato text-[20px] font-medium md:text-[28px] lg:text-[28px]">
          Top 100
        </div>
        <div className="flex items-center">
          <div className="pr-2 font-lato text-[12px]">View all</div>
          <div>
            <img src={muiTenBag} alt="muiTenBag" />
          </div>
        </div>
      </div>
      <div className="Phan2 mx-[20px] mt-[24px] flex h-fit w-[438px] items-center overflow-x-scroll mdd:mx-[90px] mdd:mt-[48px] mdd:grid mdd:h-[980px] mdd:w-[811px] mdd:grid-cols-2 lgg:mx-[90px] lgg:mt-[48px] lgg:grid lgg:h-[480px] lgg:w-[1260px] lgg:grid-cols-4">
        {Top100.map((data) => (
          <div
            key={data.id}
            className="mr-[20px] h-[480px] w-[260px] mdd:mr-0 mdd:h-[480px] mdd:w-[395.5px] lgg:mr-[20px] lgg:h-[480px] lgg:w-[300px]"
          >
            <div className="h-[327px] w-[260px] mdd:h-[327px] mdd:w-[395.5px] lgg:h-[327px] lgg:w-[300px]">
              <img
                src={data.img}
                alt="blackGirl"
                className="flex h-[327px] w-[260px] mdd:h-[327px] mdd:w-[395.5px] lgg:h-[327px] lgg:w-[300px]"
              />
            </div>

            <div className="h-fit w-[260px] mdd:h-fit mdd:w-[395.5px] lgg:h-fit lgg:w-[300px]">
              <div className="mx-[20px] mt-[20px] flex items-center justify-between mdd:mx-[20px] mdd:mt-[20px] lgg:mx-[20px] lgg:mt-[20px]">
                <div className="h-[44px] mdd:h-[44px] lgg:h-[44px]">
                  <div className="font-lato text-[12px] font-bold">
                    {data.name}
                  </div>
                  <div className="pt-0 font-lato text-[10px] mdd:pt-[4px] lgg:pt-[4px]">
                    {data.description}
                  </div>
                </div>
                <div className="">
                  <img src={iconTim} alt="iconTim" />
                </div>
              </div>
              <div className="mx-[20px] my-[12px] flex h-0 items-center mdd:mx-[20px] mdd:my-[12px] mdd:h-[25px] lgg:mx-[20px] lgg:h-[24px] lgg:py-[12px]">
                <div className="start flex">
                  <div>
                    <img src={star} alt="star" />
                  </div>
                  <div>
                    <img src={star} alt="star" />
                  </div>
                  <div>
                    <img src={star} alt="star" />
                  </div>
                  <div>
                    <img src={star} alt="star" />
                  </div>
                  <div>
                    <img src={star} alt="star" />
                  </div>
                </div>
                <div className="pl-2 font-lato text-[12px]">({data.vote})</div>
              </div>

              <div className="cardDown mx-[20px] mb-[20px] flex items-center mdd:mx-[20px] mdd:mb-[20px] lgg:mx-[20px] lgg:mb-[20px]">
                <div className="font-lato text-[14px] font-extrabold text-[#FF2E00]">
                  ${data.cost}
                </div>
                <div className="pl-2 pr-2 font-lato text-[14px] text-[#555555]">
                  ${data.maxCost}
                </div>
                <div className="font-Inter text-[12px] font-semibold text-[#FF2E00]">
                  -{data.discout}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTram;
