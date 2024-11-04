import NavHeader from "./NavHeader";
import FlashSale from "./FlashSales.jsx";
import Trending from "./Trending.jsx";
import Topp100 from "./Topp100.jsx";
import coGaiAoXanh from "./image/frm/frm2/RectangleAoXanh.png";
import coGaiAoDo from "./image/frm/frm2/Rectangle 1078.png";
import PropTypes from "prop-types";
import Footer from "./Footer.jsx";
import { useState } from "react";
const MAdv = [
  {
    id: 1,
    h1: "Never-Ending Summer",
    dedescription: "Throwback Shirts & all-day dressed",
    link: "Exlopre all category",
    img: coGaiAoDo,
  },
  {
    id: 2,
    h1: "The most famous sport brands",
    dedescription: "Get in gym essentials",
    link: "Exlopre all category",
    img: coGaiAoXanh,
  },
];

const Mobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <div>
        <NavHeader showMenu={showMenu} toggleMenu={toggleMenu} />
      </div>

      <div>
        {showMenu ? (
          <div className="hidden"></div>
        ) : (
          <div className="">
            {MAdv.map((data) => (
              <div key={data.id} className="pb-4 pt-3">
                <div className="grid grid-cols-2">
                  <div
                    className={`${data.id === 1 ? "bg-[#BF2E3B]" : "bg-[#0186C4]"} text-white`}
                  >
                    <div className="px-[20px] font-lato">
                      <div className="text-[36px] font-extrabold">
                        {data.h1}
                      </div>
                      <div className="text-[28px]">{data.dedescription}</div>
                    </div>
                    <div className="pl-[20px] pt-3 font-lato text-[20px] underline">
                      {data.link}
                    </div>
                  </div>
                  <div className="flex w-full">
                    <img src={data.img} alt="coGaiAoDo" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>{!showMenu && <FlashSale />}</div>
      <div>{!showMenu && <Trending />}</div>
      <div>{!showMenu && <Topp100 />}</div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
Mobile.propTypes = {
  showMenu: PropTypes.bool, // Thêm xác nhận loại cho showMenu
};
export default Mobile;
