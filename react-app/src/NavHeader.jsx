import logo from "./image/header/Logo.png";
import line from "./image/frm/frm2/Line 121.png";
import iconblackCardNgoai from "./image/header/blackCard.png";
import iconBlackCardTrong from "./image/header/blackCard_in.png";
import iconMuiTem from "./image/header/Arrow.png";
import timKiem from "./image/header/Vector.png";
import line1 from "./image/header/Line 1.png";
import menuX from "./image/header/VectorX.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import FlashSale from "./FlashSales.jsx";
// import Trending from "./Trending.jsx";
// import Topp100 from "./Topp100.jsx";
// import { DropDownlink } from "./Header";
// import { Nav } from "./Header";

import ResponsiveMenu from "./ResponsiveMenu";

const NavHeader = ({ showMenu, toggleMenu }) => {
  return (
    <div className="relative">
      <div>
        <div className="flex items-center justify-between pt-3">
          <div className="">
            {showMenu ? (
              <div className="absolute z-[9999] min-h-screen w-full pt-5">
                <img onClick={toggleMenu} src={menuX} />
                <div className="z-[9999]">
                  <ResponsiveMenu />
                </div>
              </div>
            ) : (
              <div className="flex items-center mdd:hidden lgg:hidden">
                <div className="cursor-pointer" onClick={() => toggleMenu()}>
                  <img src={line} alt="line" />
                  <img src={line} alt="line" className="py-0.5" />
                  <img src={line} alt="line" />
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center">
            {showMenu ? (
              <div className="hidden"></div>
            ) : (
              <Link to="/" className="flex">
                <div>
                  <img className="h-[27px] w-[40px]" src={logo} alt="logo" />
                </div>
                <div className="ml-[0.5rem] font-lato text-[22px] font-bold">
                  Luminae
                </div>
              </Link>
            )}
          </div>

          <div>
            {showMenu ? (
              <div className="opacity-0"></div>
            ) : (
              <div className="flex items-center">
                <div className="relative">
                  <div className="absolute pl-[6.5px] pt-0.5">
                    <img src={iconBlackCardTrong} alt="iconBlackCardTrong" />
                  </div>
                  <img src={iconblackCardNgoai} alt="iconblackCardNgoai" />
                </div>

                <div className="ml-1 flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-green-500 text-[14px] font-bold text-white">
                  3
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          {showMenu ? (
            <div className="opacity-0"></div>
          ) : (
            <div className="relative mx-[2%] mt-[30px] flex items-center rounded-md border-2 bg-white p-3 md:col-span-5 md:mt-3 lg:col-span-4 lg:mt-0">
              <div className="flex items-center font-lato text-[14px]">
                <input
                  type="text"
                  placeholder="Search Producs"
                  className="indent-0.5 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex items-center">
                  <div className="font-lato text-[14px]">All categories</div>
                  <div>
                    <img src={iconMuiTem} alt="iconMuiTem" />
                  </div>
                </div>
              </div>

              <div className="absolute right-[32px] items-center text-gray-700">
                <img src={line1} alt="line1" />
              </div>
              <div className="absolute right-2 items-center">
                <img src={timKiem} alt="timKiem" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
NavHeader.propTypes = {
  showMenu: PropTypes.bool.isRequired, // Thêm xác nhận loại cho showMenu
};
NavHeader.propTypes = {
  toggleMenu: PropTypes.bool.isRequired, // Thêm xác nhận loại cho showMenu
};
export default NavHeader;
