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
// import intergram1 from "./image/header/intergram1.png";
// import intergram2 from "./image/header/intergram2.png";
// import intergram3 from "./image/header/intergram3.png";
// import intergram4 from "./image/header/intergram4.png";
import facebook from "./image/header/Vector 2998.png";
import telegram from "./image/header/Subtract.png";

const Header = () => {
  
  return (
    <div>
      <div className="w-full">
        <div className="header1 mx-auto grid w-[92%] bg-white md:grid-rows-2 lg:mt-7 lg:grid-cols-2">
          <div className="phan1 grid md:grid-cols-12 lg:grid-cols-6">
            <div className="flex h-full items-center md:col-span-7 md:mt-3 lg:mt-0 lg:col-span-2">
              <div>
                <img className="" src={logo} alt="logo" />
              </div>
              <div className="ml-[0.5rem] font-lato text-3xl font-bold">
                Luminae
              </div>
            </div>

            <div className="relative w-full flex h-full items-center rounded-md border-2 bg-white md:col-span-5 md:mt-3 lg:col-span-4 lg:mt-0">
              <div className="flex items-center font-lato text-[14px]">
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

              <div className="absolute right-8 items-center pl-[0.5rem] text-gray-400">
                |
              </div>
              <div className="absolute right-3 items-center">
                <img src={timKiem} alt="timKiem" />
              </div>
            </div>
          </div>
          <div className="phan2 grid md:grid-cols-12 md:py-2 lg:grid-cols-6">
            <div className="flex h-full items-center justify-between bg-white md:col-span-6 lg:col-span-4">
              <div>About us</div>
              <div>Blog</div>
              <div>Contact us</div>
              <div>Help & support</div>
            </div>
            <div className="flex h-full items-center justify-end space-x-5 bg-white md:col-span-6 lg:col-span-2">
              {/* <div>
            <div>
              <img src={facebook} alt="intergram1" />
            </div>
            <div>
              <div>
                <img src={intergram2} alt="intergram2" />
              </div>
              <div>
                <img src={intergram3} alt="intergram" />
              </div>
              <div>
                <img src={intergram4} alt="intergram4" />
              </div>
            </div>
          </div> */}
              <div className="">
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

        <div className="header2 grid h-[45%] w-full bg-black md:grid-cols-2 lg:grid-cols-3">
          <div className="grid w-full items-center justify-between px-8 md:grid-cols-6 lg:grid-cols-6">
            <div className="grid w-full items-center md:col-span-2 md:grid-cols-2">
              <div className="md:col-start-1 lg:col-start-1">
                <img src={Categorry} alt="Categorry" />
              </div>
              <div className="grid w-full items-center pr-5 font-lato text-[20px] font-bold text-white md:col-span-2 md:col-start-2 lg:col-span-2 lg:col-start-2">
                Categories
              </div>
            </div>

            <div className="grid items-center md:col-start-5 md:grid-cols-2 lg:col-start-5 lg:grid-cols-2">
              <div className="w-full font-lato text-[12px] text-white">USD</div>
              <div className="pl-[0.5rem]">
                <img src={muiTen} alt="muiTen" />
              </div>
            </div>

            <div className="grid items-center md:col-start-6 md:grid-cols-2 lg:col-start-6 lg:grid-cols-2">
              <div className="w-full font-lato text-[12px] text-white">
                English
              </div>
              <div className="pl-[1rem]">
                <img src={muiTen} alt="muiTen" />
              </div>
            </div>
          </div>

          <div className="mx-[5rem] hidden items-center lg:grid lg:grid-cols-3">
            <div className="">
              <img src={mencosmetic} alt="mencosmetic" />
            </div>
            <div className="lg:col-span-2">
              <div className="font-lato text-[12px] font-bold text-white">
                Weekly Mens Toiletries Coupons.
              </div>
              <div className="font-lato text-[12px] text-white">
                We extend exclusive discounts to our male clientele
              </div>
            </div>
          </div>

          <div className="mx-auto grid items-center justify-between md:grid-cols-3 lg:grid-cols-3">
            <div className="flex items-center">
              <div>
                <div>
                  <img src={elip257} alt="elip257" />
                </div>
                <div className="pt-0.5">
                  <img src={elip255} alt="elip255" />
                </div>
              </div>
              <div className="pl-2 text-white">Sign in</div>
            </div>
            <div className="flex items-center">
              <div>
                <img src={iconFavorites} alt="iconFavorites" />
              </div>
              <div className="pl-2 text-white">Favorites</div>
            </div>
            <div className="flex items-center">
              <div>
                <div className="relative">
                  <div className="absolute pl-1.5 pt-0.5">
                    <img src={iconCardTrong} alt="iconCardTrong" />
                  </div>
                  <img src={iconCardNgoai} alt="iconCardNgoai" />
                </div>
              </div>
              <div className="pl-2 pr-2 text-white">Card</div>
              <div className="flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-green-500 text-[14px] font-bold text-white">
                3
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[3rem] flex items-center justify-between bg-white">
        <div className="hover:text-orange-500">Woman</div>
        <div className="hover:text-orange-500">Male</div>
        <div className="hover:text-orange-500">Mother-Child</div>
        <div className="hover:text-orange-500">Home & Furniture</div>
        <div className="hover:text-orange-500">Super market</div>
        <div className="hover:text-orange-500">Cosmetics</div>
        <div className="hover:text-orange-500">Shoe & Bag</div>
        <div className="hover:text-orange-500">Electronic</div>
        <div className="hover:text-orange-500">Sport & Outdoor</div>
        <div className="hover:text-orange-500">Best seller</div>
      </div>
     
    </div>
  );
};

// Xuất component Header để có thể import và sử dụng ở nơi khác
export default Header;
