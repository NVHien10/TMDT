import { DropDownlink, Nav } from "./components/NavShow";
import muiTenBag from "./image/frm/frm2/Vector175_bag.png";
import PropTypes from "prop-types";
import { useState } from "react";
import Footer from "./components/Footer";

const ReponsiveMenu = ({ showMenu }) => {
  const Foot = [
    {
      id: 1,
      name: "Login/Register",
    },
    {
      id: 2,
      name: "Help & Support",
    },
    {
      id: 3,
      name: "About us",
    },
    {
      id: 4,
      name: "Blog",
    },
  ];
  const [showWoman, setShowWoman] = useState(false);
  const toggleWoman = () => {
    setShowWoman(!showWoman);
  };

  // const [showElectronic, setShowElectronic] = useState(false);
  // const toggleElectronic = () => {
  //   setShowElectronic(!showElectronic);
  // };

  const handleClick = (id) => {
    switch (id) {
      case 1:
        toggleWoman(); // Thực hiện toggleNav nếu id là 1
        break;
      case 2:
        // Thực hiện hành động khác nếu id là 2
        console.log("Action for Electronic");
        break;
      case 8:
        break;
      default:
        console.log("Default action");
    }
  };
  return (
    <div className="">
      <div className="relative">
        <div className="pb-4 text-center font-bold">Menu</div>
        <div className={`${showMenu ? "bg-white" : "top-0"} bg-white`}>
          {Nav.map((data) => (
            <div key={data.id} className="bg-[#dddada] pl-[4%]">
              <a
                href={data.link}
                onClick={() => handleClick(data.id)}
                className={`${showWoman && data.id === 1 ? "pb-4 text-orange-500" : ""} cursor-pointer`}
              >
                {data.name}
              </a>

              <div className="grid-row-4 grid grid-cols-2 justify-between pb-3 pl-2 hover:text-blue-500">
                {showWoman && data.id === 1 && (
                  <>
                    {DropDownlink.map((dropdownData) => (
                      <div
                        className="h-full w-full bg-white pl-5 pt-5"
                        key={dropdownData.id}
                      >
                        <a
                          className="font-lato font-bold uppercase hover:text-blue-400"
                          href={dropdownData.link}
                        >
                          {dropdownData.h1}
                        </a>

                        <div className="flex flex-col justify-between pt-1 hover:text-blue-400">
                          {dropdownData.item.map((subItem, index) => (
                            <a
                              key={index} // Sử dụng index làm key vì item không có id riêng
                              className="block hover:text-blue-400"
                              href="#"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div>
          {Foot.map((data) => (
            <div
              key={data.id}
              className="phan1 grid grid-cols-4 bg-white py-2 pl-[4%] md:grid md:grid-cols-10 md:px-[90px] lg:grid lg:grid-cols-10 lg:px-[90px]"
            >
              <div className="col-span-3 h-full font-lato text-[16px] font-bold md:col-span-9 md:text-[28px] lg:col-span-9 lg:text-[28px]">
                {data.name}
              </div>

              <div className="pl-16">
                <img src={muiTenBag} alt="muiTenBag" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
ReponsiveMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired, // Thêm xác nhận loại cho showMenu
};
export default ReponsiveMenu;
