import Footer from "./Footer";
import Header from "./Header";
import star from "../image/frm/frm2/Star 2.png";
import NavHeader from "../NavHeader";
import React from 'react';
//import NoResult from "./image/electronic/noresult.png";
import iconWarning from "../image/electronic/warning.png";
import NoResultMin from "../image/electronic/noresultMin.png";
import camera1 from "../image/electronic/camera.png";
import camera2 from "../image/electronic/camera2.png";
import camera3 from "../image/electronic/camera3.png";
const warn = [
  {
    id: 1,
    content:
      "We recommend you to search different clear key words to get the best result.",
  },
  {
    id: 2,
    content: "You can see the most related purchased products bellow.",
  },
];
const Electronicc = [
  {
    id: 1,
    img: camera1,
    name: "INSTAX Wide 300 Black",
    cost: 82.99,
    costMo: "",
  },
  {
    id: 2,
    img: camera2,
    name: "INSTAX Square SQ1 Chalk",
    cost: 112.99,
    costMo: "129.99",
  },
  {
    id: 3,
    img: camera3,
    name: "INSTAX Wide 300 Black",
    cost: 102,
    costMo: "129.99",
  },
];
const Electronic = () => {
  return (
    <div>
      <div className="hidden md:block lg:block">
        <Header />
      </div>

      <div className="block md:hidden lg:hidden">
        <NavHeader />
      </div>
      <div className="block md:flex md:items-center">
        <div className="pl-9">
          <img src={NoResultMin} alt="NoResult" />
        </div>
        <div className="mx-5 inline-block rounded-2xl border-2 px-2">
          <h1 className="font-lato text-[15px] font-bold">
            No results were found for searching Blue Sony Camera .
          </h1>
          {warn.map((data) => (
            <div key={data.id} className="flex items-center">
              <div className="">
                <img src={iconWarning} alt="iconWarning" />
              </div>
              <div className="py-2 font-lato text-[14px]">{data.content}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden items-center overflow-x-auto overscroll-x-auto px-16 pt-9 md:grid md:grid-cols-3 lg:hidden">
        {Electronicc.map((data) => (
          <div key={data.id}>
            <div className="pl-5">
              <div className="">
                <div className="">
                  <img src={data.img} alt="blackGirl" />
                </div>
              </div>
              <div className="pl-7">
                <div className="flex items-center">
                  <div>
                    <div className="pt-[15px] font-lato text-[12px] font-bold">
                      {data.name}
                    </div>
                  </div>
                </div>
                <div className="flex items-center py-2">
                  <div className="start flex pb-[6px]">
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
                </div>
                <div className="cardDown flex items-center pb-[15px]">
                  <div className="font-lato text-[14px] font-extrabold text-[#FF2E00]">
                    ${data.cost}
                  </div>
                  <div className="pl-3 font-lato text-[14px] font-extrabold text-[#9D9D9D]">
                    {data.costMo}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="block pt-4 lg:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Electronic;
