import { Slider } from "@nextui-org/react";
import { useState } from "react";
import { Size, Color } from "./CategoryShow";

const Model = [
  {
    id: 1,
    name: "Short",
    number: 60,
  },
  {
    id: 2,
    name: "Mid-length ",
    number: 10,
  },
  {
    id: 3,
    name: "Sweather",
    number: 56,
  },
  {
    id: 4,
    name: "Party Dresses",
    number: 80,
  },
  {
    id: 5,
    name: "Regular Fit",
    number: 100,
  },
];
const Style = [
  {
    id: 1,
    name: "Casual",
  },
  {
    id: 2,
    name: "Business casual  ",
  },
  {
    id: 3,
    name: "Bohemian",
  },
  {
    id: 4,
    name: "Minimalist",
  },
  {
    id: 5,
    name: "Uniqlo",
  },
  {
    id: 6,
    name: "Zara",
  },
  {
    id: 7,
    name: "Gucci",
  },
  {
    id: 8,
    name: "Mango",
  },
  {
    id: 9,
    name: "Ralph Lauren",
  },
  {
    id: 10,
    name: "Calvin Klein",
  },
  {
    id: 11,
    name: "Rachel Pally",
  },
  {
    id: 12,
    name: "Zara",
  },
  {
    id: 13,
    name: "Minimalist",
  },
  {
    id: 14,
    name: "Mango",
  },
  {
    id: 15,
    name: "Short",
  },
];

import allcategories from "../image/frm/frm2/4cham.png";
import muitenlen from "../image/frm/frm2/muitenlen.png";
import Horizontal from "../image/frm/frm2/Horizontal.png";
import Check from "../image/frm/frm2/Check.png";
import Minus from "../image/frm/frm2/Minus.png";
import timKiem from "../image/header/Vector.png";

const AllCategory = ({ allCategoryClick, toggleAllCategoryClick }) => {
  const [modeClick, setModelClick] = useState(false);
  const toggleModeClick = () => {
    setModelClick(!modeClick);
    console(console.log("55"));
  };

  const [styleClick, setStylelClick] = useState(false);
  const toggleStylelClick = () => {
    setStylelClick(!styleClick);
    console(console.log("55"));
  };

  const [colorClick, setColorClick] = useState(false);
  const toggleColorClick = () => {
    setColorClick(!colorClick);
    console(console.log("55"));
  };

  const [sizeClick, setSizeClick] = useState(false);
  const toggleSizeClick = () => {
    setSizeClick(!sizeClick);
    console(console.log("55"));
  };

  const [priceClick, setPriceClick] = useState(false);
  const togglePriceClick = () => {
    setPriceClick(!priceClick);
    console(console.log("55"));
  };

  const [value, setValue] = useState([200, 500]);

  const [bgSize, setBgSize] = useState(false);
  const toggleBgSize = (id) => {
    setBgSize((prev) => ({
      ...prev, // Sao chép trạng thái cũ
      [id]: !prev[id], // Đảo trạng thái của id hiện tại
    }));
  };

  const [tick, setTick] = useState(false);
  const toggleTick = (id) => {
    setTick((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const [hoverColor, setHoverColor] = useState("");

  return (
    <div className="w-[303px] mdd:w-[359px] lgg:w-[359px]">
      <div className="mr-[32px] mt-[36px]">
        <div
          onClick={toggleAllCategoryClick}
          className="ml-[64px] flex w-[263px] items-center"
        >
          <div>
            <img src={allcategories} alt="allcategories" />
          </div>
          <div className="ml-[16px] font-lato text-[16px] font-extrabold">
            All Categories
          </div>
        </div>

        {allCategoryClick && (
          <>
            <div>
              <div className="ml-[64px] mr-[32px] mt-[20px]">
                <div className="mt-5 h-[36px] w-[213px]">
                  <div className="flex items-center justify-between">
                    <div className="font-lato text-[14px] font-bold uppercase">
                      Brand
                    </div>
                    <div>
                      <img src={muitenlen} alt="muitenlen" />
                    </div>
                  </div>
                  <div className="relative mt-3 rounded-md border-2 py-[4px] pl-[16px]">
                    <input
                      type="text"
                      placeholder="Search "
                      className="indent-0.5 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="absolute right-3 top-[4px] items-center">
                      <img src={timKiem} alt="timKiem" />
                    </div>
                  </div>
                </div>

                <div className="mt-[28px] w-[213px]">
                  <div
                    onClick={toggleModeClick}
                    className="flex cursor-pointer items-center justify-between pt-[28px]"
                  >
                    <div className="font-lato text-[14px] font-bold uppercase">
                      Model
                    </div>
                    <div>
                      <img
                        className={`transition-all duration-200 ${modeClick ? " " : "rotate-180"}`}
                        src={muitenlen}
                        alt="muitenlen"
                      />
                    </div>
                  </div>

                  {modeClick && (
                    <>
                      <div className="top-00 relative left-0 h-[224px] w-[213px]">
                        {Model.map((data) => (
                          <div
                            key={data.id}
                            className="flex items-center justify-between pt-[20px]"
                          >
                            <div className="font-lato text-[14px]">
                              {data.name}
                            </div>
                            <div>{data.number}</div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="ml-[32px] mt-[28px] w-[263px]">
                <img src={Horizontal} alt="Horizontal" />
              </div>

              {/* Style */}

              <div className="w-[213px]">
                <div
                  onClick={toggleStylelClick}
                  className="ml-[64px] mr-[32px] flex w-[213px] items-center justify-between pt-[28px]"
                >
                  <div className="font-lato text-[14px] font-bold uppercase">
                    Style
                  </div>
                  <div>
                    <img
                      src={muitenlen}
                      alt="muitenlen"
                      className={`transition-all duration-200 ${styleClick ? " " : "rotate-180"}`}
                    />
                  </div>
                </div>

                {styleClick && (
                  <div className="ml-[64px] h-[494px] w-[263px] overflow-auto">
                    {Style.map((data) => (
                      <div
                        key={data.id}
                        className="flex items-center pt-[20px]"
                      >
                        <div>
                          <input type="checkbox" className="h-5 w-5" />
                        </div>
                        <div className="ml-[10px] font-lato text-[14px]">
                          {data.name}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* Color */}

              <div className="ml-[32px] mt-[28px] w-[263px]">
                <img src={Horizontal} alt="Horizontal" />
              </div>

              <div className="w-[218px]">
                <div
                  onClick={toggleColorClick}
                  className="ml-[64px] mt-[28px] flex w-[213px] items-center justify-between"
                >
                  <div className="font-lato text-[14px] font-bold uppercase">
                    Color
                  </div>
                  <div>
                    <img
                      src={muitenlen}
                      alt="muitenlen"
                      className={`transition-all duration-200 ${colorClick ? " " : "rotate-180"}`}
                    />
                  </div>
                </div>
                {colorClick && (
                  <div className="ml-[60px] grid w-[218px] grid-cols-6">
                    {Color.map((data) => (
                      <div
                        key={data.id}
                        className="relative cursor-pointer pt-[15px]"
                      >
                        <div
                          className="border-9 h-[25px] w-[25px] rounded-full border"
                          style={{ backgroundColor: data.value }}
                          onMouseEnter={() => setHoverColor(data.id)}
                          onMouseLeave={() => setHoverColor(null)}
                          onClick={() => toggleTick(data.id)}
                        ></div>
                        {hoverColor === data.id && (
                          <div className="absolute -top-2 bg-black px-[10px] font-lato text-[14px] font-bold text-white">
                            {data.name}
                          </div>
                        )}
                        {tick[data.id] ? (
                          <div className="absolute bottom-2 left-[6px]">
                            <img src={Check} alt="Check" />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="ml-[32px] mt-[28px] w-[263px]">
                <img src={Horizontal} alt="Horizontal" />
              </div>
              {/* Size */}

              <div className="w-[218px]">
                <div
                  onClick={toggleSizeClick}
                  className="ml-[64px] mt-[28px] flex w-[213px] items-center justify-between"
                >
                  <div className="font-lato text-[14px] font-bold uppercase">
                    Size
                  </div>
                  <div>
                    <img
                      src={muitenlen}
                      alt="muitenlen"
                      className={`transition-all duration-200 ${sizeClick ? " " : "rotate-180"}`}
                    />
                  </div>
                </div>

                {sizeClick && (
                  <div className="ml-[60px] grid w-[218px] grid-cols-4">
                    {Size.map((data) => (
                      <div
                        key={data.id}
                        className="relative cursor-pointer pt-[15px]"
                        onClick={() => toggleBgSize(data.id)}
                      >
                        <div
                          className={`mr-[5px] border text-center font-lato text-[14px] font-bold ${bgSize[data.id] ? "bg-[#D1E2EB]" : null} `}
                        >
                          <button>{data.name}</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="ml-[32px] mt-[28px] w-[263px]">
                <img src={Horizontal} alt="Horizontal" />
              </div>
              <div>
                <div
                  onClick={togglePriceClick}
                  className="ml-[64px] mt-[28px] flex w-[213px] items-center justify-between"
                >
                  <div className="font-lato text-[14px] font-bold uppercase">
                    Price
                  </div>
                  <div>
                    <img
                      src={muitenlen}
                      alt="muitenlen"
                      className={`transition-all duration-200 ${priceClick ? " " : "rotate-180"}`}
                    />
                  </div>
                </div>
                {/* Slider */}
                {priceClick && (
                  <div className="ml-[64px] h-[71px] w-[213px] max-w-md items-start justify-center">
                    <div className="mb-[16px] mt-[24px]">
                      <div className="flex items-center justify-between">
                        {Array.isArray(value) && (
                          <>
                            <div className="rounded-lg border-2 px-[20px] py-[10px] font-lato text-[14px]">
                              ${value[0]}
                            </div>
                            <div>
                              <img src={Minus} alt="Minus" />
                            </div>
                            <div className="rounded-lg border-2 px-[20px] py-[10px] font-lato text-[14px]">
                              ${value[1]}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <Slider
                      formatOptions={{ style: "currency", currency: "USD" }}
                      step={50}
                      maxValue={1000}
                      minValue={0}
                      value={value}
                      onChange={setValue}
                      className="max-w-md"
                    />
                    <div className="mt-[32px] flex items-center justify-between">
                      <div className="font-lato text-[14px] text-[#9D9D9D]">
                        Minimum $200
                      </div>
                      <div className="font-lato text-[14px] text-[#9D9D9D]">
                        Maximum $500
                      </div>
                    </div>
                    <div className="mt-[16px] font-lato text-[14px]">
                      878 products found
                    </div>

                    {/* <p className="text-default-500 text-small font-medium">
                Selected budget:{" "}
                {Array.isArray(value) && value.map((b) => `$${b}`).join(" – ")}
              </p> */}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllCategory;
