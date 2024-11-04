import logo from "./image/header/logo.png";
import iconMuiTem from "./image/header/Arrow.png";
import timKiem from "./image/header/Vector.png";
import Categorry from "./image/header/VectorCategorry.png";
import muiTen from "./image/header/Vector 175.png";
import mencosmetic from "./image/header/Men cosmetic.png";
import elip257 from "./image/header/Ellipse 257.png";
import elip255 from "./image/header/Ellipse 255.png";
import iconFavorites from "./image/header/VectorHeart.png";
import iconCardNgoai from "./image/header/cardNgoai.png";
import iconCardTrong from "./image/header/cardTrong.png";
import headeraoxanh from "./image/header/header-aoxanh.png";
import line from "./image/header/Line1.png";
import line1 from "./image/header/Line 1.png";
import iconblackCardNgoai from "./image/header/blackCard.png";
import iconBlackCardTrong from "./image/header/blackCard_in.png";
import line33 from "./image/frm/frm2/Line 121.png";
import menuX from "./image/header/VectorX.png";
//import intergram1 from "./image/header/intergram1.png";
// import intergram2 from "./image/header/intergram2.png";
// import intergram3 from "./image/header/intergram3.png";
// import intergram4 from "./image/header/intergram4.png";
import facebook from "./image/header/Vector 2998.png";
import telegram from "./image/header/Subtract.png";
import { useState } from "react";
import { Link } from "react-router-dom";

import ReponsiveMenu from "./ReponsiveMenu";
export const Nav = [
  {
    id: 1,
    name: "Woman",
    link: "#",
  },
  {
    id: 2,
    name: "Male",
    link: "#",
  },
  {
    id: 3,
    name: "Mother-Child",
    link: "#",
  },
  {
    id: 4,
    name: "Home & Furniture",
    link: "#",
  },
  {
    id: 5,
    name: "Super market",
    link: "#",
  },
  {
    id: 6,
    name: "Cosmetics",
    link: "#",
  },
  {
    id: 7,
    name: "Shoe & Bag",
    link: "https://www.google.com.vn/",
  },
  {
    id: 8,
    name: "Electronic",
    link: "/electronic",
    // link: "https://www.google.com.vn/",
  },
  {
    id: 9,
    name: "Sport & Outdoor",
    link: "#",
  },
  {
    id: 10,
    name: "Best seller",
    link: "#",
  },
];
export const DropDownlink = [
  {
    id: 1,
    h1: "Shoe & Bag",
    link: "#",
    item: ["Casual Shoes", "Boots", "Sandals", "Slippers"],
  },
  {
    id: 2,
    h1: "Home Textile",
    link: "#",
    item: ["Bedding", "Pillows", "Handkerchief Towels", "Curtain"],
  },
  {
    id: 3,
    h1: "Party Supplies",
    link: "#",
    item: ["Event & Party", "Christmas", "Artificial Decorations", "Wedding"],
  },
  {
    id: 4,
    h1: "Luxury & designer",
    link: "#",
    item: ["Casual Shoes", "Boots", "Sandals", "Slippers"],
  },
  {
    id: 5,
    h1: "Cosmetics",
    link: "#",
    item: ["Casual Shoes", "Boots", "Sandals", "Slippers"],
  },
  {
    id: 6,
    h1: "Sport & Outdoors",
    link: "#",
    item: ["Casual Shoes", "Boots", "Sandals", "Slippers"],
  },
  {
    id: 7,
    h1: "Clothes",
    link: "#",
    item: [
      "Bottoms",
      "Women's Clothing",
      "T-Shirts and Tops",
      "Dresses",
      "Outerwear",
      "Formal Wear",
      "Casual Wear",
      "Seasonal Collections",
      "Sports Bras",
      "Workout Tops",
      "Fall Wardrobe",
    ],
  },
];

const Header = ({ showMenu, toggleMenu }) => {
  const [showElectronic, setShowElectronic] = useState(false);
  const handleClick = () => {
    setShowElectronic(!showElectronic);
    console.log("bb");
    // Cập nhật state để hiển thị component
  };
  return (
    <div className="h-[164px] w-full lgg:h-[254px]">
      <div className="h-[164px] w-full lgg:h-[202px]">
        <div className="header1 block h-[96px] w-[478px] items-center justify-between bg-white mdd:w-[991px] mdd:justify-between mdd:px-[90px] lgg:flex lgg:w-[1440px] lgg:justify-between lgg:px-[90px]">
          <div className="block items-center justify-between mdd:flex lgg:flex">
            <div className="mx-[20px] mt-[32px] flex h-[27px] w-[438px] items-center justify-between mdd:mx-0 mdd:mt-0 mdd:h-fit mdd:w-fit lgg:mx-0 lgg:mt-0 lgg:h-fit lgg:w-fit">
              <div>
                {showMenu ? (
                  <div className="absolute z-[9999] min-h-screen w-full">
                    <img onClick={toggleMenu} src={menuX} />
                    <div className="z-[9999]">
                      <ReponsiveMenu />
                    </div>
                  </div>
                ) : (
                  <div className="flex cursor-pointer items-center mdd:hidden lgg:hidden">
                    <div
                      className="cursor-pointer"
                      onClick={() => toggleMenu()}
                    >
                      <img src={line33} alt="line" />
                      <img src={line33} alt="line" className="py-0.5" />
                      <img src={line33} alt="line" />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex h-full items-center mdd:mt-3 lgg:col-span-2 lgg:mt-0">
                {showMenu ? (
                  <div className="hidden"></div>
                ) : (
                  <>
                    <Link to="/">
                      <img
                        className="h-[33px] w-[49px]"
                        src={logo}
                        alt="logo"
                      />
                    </Link>
                    <Link
                      to="/"
                      className="ml-[0.5rem] font-lato text-[32px] font-bold"
                    >
                      Luminae
                    </Link>
                  </>
                )}
              </div>

              <div className="flex items-center mdd:hidden lgg:hidden">
                {showMenu ? (
                  <div className="opacity-0"></div>
                ) : (
                  <>
                    <div className="relative">
                      <div className="absolute pl-[6.5px] pt-0.5">
                        <img
                          src={iconBlackCardTrong}
                          alt="iconBlackCardTrong"
                        />
                      </div>
                      <img src={iconblackCardNgoai} alt="iconblackCardNgoai" />
                    </div>

                    <div className="ml-1 flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-green-500 text-[14px] font-bold text-white">
                      3
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="relative mx-[20px] mt-[48px] flex h-[54px] w-[438px] items-center rounded-md border-2 bg-white mdd:mx-0 mdd:ml-0 mdd:mt-0 mdd:h-[40px] mdd:w-[345px] lgg:mx-0 lgg:ml-[28.5px] lgg:mt-0 lgg:h-[40px] lgg:w-[345px]">
              <div className="flex items-center pl-[12px] font-lato text-[14px]">
                <input
                  type="text"
                  placeholder="Search Producs"
                  className="indent-0.5 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex items-center pl-[16px]">
                  <div className="font-lato text-[14px]">All categories</div>
                  <div>
                    <img src={iconMuiTem} alt="iconMuiTem" />
                  </div>
                </div>
              </div>

              <div className="absolute right-10 items-center pl-[0.5rem] text-gray-400">
                <img src={line} alt="line" />
              </div>
              <div className="absolute right-3 items-center">
                <img src={timKiem} alt="timKiem" />
              </div>
            </div>
          </div>

          <div className="mt-0 hidden justify-between mdd:mt-2 mdd:flex lgg:mt-0 lgg:flex">
            <div className="hidden h-[20px] w-[420px] items-center justify-between bg-white font-lato text-[14px] mdd:flex lgg:mr-[80px] lgg:flex">
              <div>About us</div>
              <div>Blog</div>
              <div>Contact us</div>
              <div>Help & support</div>
            </div>
            <div className="hidden h-full items-center justify-between space-x-4 bg-white mdd:flex lgg:flex">
              <div>
                <img src={facebook} alt="facebook" />
              </div>
              <div className="">
                <img src={facebook} alt="facebook" />
              </div>
              <div>
                <img src={telegram} alt="telegram" />
              </div>
            </div>
          </div>
        </div>

        <div className="header2 mdd:[991px] hidden h-[40px] items-center justify-between bg-black px-[90px] mdd:flex lgg:flex lgg:h-[78px] lgg:w-[1440px]">
          <div className="flex items-center">
            <div className="">
              <img src={Categorry} alt="Categorry" />
            </div>
            <div className="items-center pl-[4px] font-lato text-[20px] font-bold text-white">
              Categories
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex items-center">
              <div className="font-lato text-[12px] text-white">USD</div>
              <div className="pl-1">
                <img src={muiTen} alt="muiTen" />
              </div>
            </div>

            <div className="flex items-center">
              <div className="font-lato text-[12px] text-white">English</div>
              <div className="pl-1">
                <img src={muiTen} alt="muiTen" />
              </div>
            </div>
          </div>
          <div className="hidden h-[78px] lgg:flex">
            <img src={line1} alt="line1" />
          </div>

          <div className="hidden items-center lgg:flex">
            <div className="">
              <img src={mencosmetic} alt="mencosmetic" />
            </div>
            <div className="ml-[10px]">
              <div className="font-lato text-[12px] font-bold text-white">
                Weekly Mens Toiletries Coupons.
              </div>
              <div className="font-lato text-[12px] text-white">
                We extend exclusive discounts to our male clientele
              </div>
            </div>
          </div>

          <div className="hidden h-[78px] lgg:flex">
            <img src={line1} alt="line1" />
          </div>

          <div className="flex justify-between">
            <div className="flex items-center">
              <div>
                <div className="pl-[2.5px]">
                  <img src={elip257} alt="elip257" />
                </div>
                <div className="">
                  <img src={elip255} alt="elip255" />
                </div>
              </div>
              <div className="ml-[4px] font-lato text-[14px] text-white">
                Sign in
              </div>
            </div>

            <div className="mx-[20px] flex items-center">
              <div>
                <img src={iconFavorites} alt="iconFavorites" />
              </div>
              <div className="ml-[4px] font-lato text-[14px] text-white">
                Favorites
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex">
                <div className="relative">
                  <div className="absolute pl-1.5 pt-0.5">
                    <img src={iconCardTrong} alt="iconCardTrong" />
                  </div>
                  <img src={iconCardNgoai} alt="iconCardNgoai" />
                </div>

                <div className="ml-[4px] font-lato text-[14px] text-white">
                  Card
                </div>
              </div>

              <div className="ml-[8px] flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-green-500 text-[14px] font-bold text-white">
                3
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden mdd:block lgg:block">
        <div className="z-[9999] mx-[90px] my-[16px] flex h-[52px] justify-between font-lato text-[14px]">
          {Nav.map((data) => (
            <div key={data.id} className={`group`}>
              <a onClick={handleClick} href={data.link}>
                {data.name}
              </a>
              <div
                className={`${data.id === 1 ? "group-hover:flex" : "hidden"} absolute z-50 hidden bg-white pr-6 pt-5`}
              >
                <ul className="grid grid-cols-4 gap-6 px-6 pb-2">
                  {DropDownlink.map((data) => (
                    <li className="pt-2" key={data.id}>
                      <a
                        className="font-lato font-bold uppercase hover:text-blue-400"
                        href={data.link}
                      >
                        {data.h1}
                      </a>

                      <div className="pt-1 hover:text-blue-400">
                        {data.item.map((subItem, index) => (
                          <a
                            key={index} // Sử dụng index làm key vì item không có id riêng
                            className="block hover:text-blue-400"
                            href="#"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="hidden lg:block">
                  <img
                    className="my-4 h-fit w-[275px] pl-6"
                    src={headeraoxanh}
                    alt="headeraoxanh"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Xuất component Header để có thể import và sử dụng ở nơi khác
export default Header;
